import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { DraggableAttributes } from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import { useRef } from "react";

interface SortableItemProps {
  children:
    | React.ReactNode
    | ((props: {
        attributes: DraggableAttributes;
        listeners: SyntheticListenerMap | undefined;
        isDragging: boolean;
      }) => React.ReactNode);
  idItem: string | number;
}

export const SortableItem = ({ children, idItem }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: idItem });
  const sortableRef = useRef<HTMLDivElement | null>(null);
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : "auto",
    scale: isDragging ? 1.01 : 1,
  };
  return (
    <div
      ref={(el) => {
        setNodeRef(el);
        sortableRef.current = el;
      }}
      style={style}
      className={`relative transition-all duration-200 ease-out ${
        isDragging ? "cursor-grabbing" : ""
      }`}
    >
      {typeof children === "function"
        ? children({ attributes, listeners, isDragging })
        : children}
    </div>
  );
};
