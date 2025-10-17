import React from "react";
import {
  closestCenter,
  closestCorners,
  DndContext,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type CollisionDetection,
  type DragEndEvent,
  type Modifier,
} from "@dnd-kit/core";
import {
  restrictToHorizontalAxis,
  restrictToParentElement,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import {
  horizontalListSortingStrategy,
  rectSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
  type SortingStrategy,
} from "@dnd-kit/sortable";

interface SortableItemWrapperProps {
  itemsIds: (string | number)[];
  children: React.ReactNode;

  axis?: "horizontal" | "vertical";
  restriction?: "parent" | "window";
  sortableStrategy?: "vertical" | "horizontal" | "grid";
  collision?: "center" | "corners";

  handleDragEnd: (event: DragEndEvent) => void;
}

export const SortableItemWrapper: React.FC<SortableItemWrapperProps> = ({
  children,
  axis = "vertical",
  restriction = "parent",
  sortableStrategy = "vertical",
  collision = "corners",
  handleDragEnd,
  itemsIds = [],
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),

    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),

    useSensor(MouseSensor)
  );

  const collisionDetectionAlgorithm = {
    center: closestCenter,
    corners: closestCorners,
  } as const;

  const axisModifiers = {
    vertical: restrictToVerticalAxis,
    horizontal: restrictToHorizontalAxis,
  } as const;

  const restrictionModifiers = {
    parent: restrictToParentElement,
    window: restrictToWindowEdges,
  } as const;

  const sortingStrategy = {
    vertical: verticalListSortingStrategy,
    horizontal: horizontalListSortingStrategy,
    grid: rectSortingStrategy,
  } as const;

  const modifiers: Modifier[] = [
    ...(sortableStrategy === "grid" ? [] : [axisModifiers[axis]]),
    restrictionModifiers[restriction],
  ];

  const strategy: SortingStrategy = sortingStrategy[sortableStrategy];
  const collisionDetection: CollisionDetection =
    collisionDetectionAlgorithm[collision];

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetection}
      onDragEnd={handleDragEnd}
      modifiers={modifiers}
    >
      <SortableContext items={itemsIds} strategy={strategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};
