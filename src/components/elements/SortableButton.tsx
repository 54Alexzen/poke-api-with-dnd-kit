import type { DraggableAttributes } from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { GripVertical, Move } from "lucide-react";
import { Tooltip } from "../ui/Tooltip";
import { Button } from "../ui/Button";

interface SortableButtonProps {
  pokemon: string;
  dragHandleProps?: {
    attributes: DraggableAttributes;
    listeners: SyntheticListenerMap | undefined;
    isDragging: boolean;
  };
}

export const SortableButton = ({
  dragHandleProps,
  pokemon,
}: SortableButtonProps) => {
  const isDragging = dragHandleProps?.isDragging || false;
  return (
    <Tooltip
      content={`Reordenar a ${pokemon}`}
      position="top"
      disabled={isDragging}
      arrow={false}
    >
      <Button
        variant="icon"
        aria-label="Reordenar pokemón"
        className="cursor-grab bg-stone-200 dark:bg-stone-700 rounded-md hover:bg-stone-300 dark:hover:bg-stone-600 border border-stone-300 dark:border-stone-600 active:cursor-grabbing transition-colors duration-200"
        {...dragHandleProps?.listeners}
        {...dragHandleProps?.attributes}
      >
        {isDragging ? (
          <Move className="sm:size-4 size-3.5 text-stone-700 dark:text-stone-300" />
        ) : (
          <GripVertical className="sm:size-4 size-3.5 text-stone-700 dark:text-stone-300" />
        )}
      </Button>
    </Tooltip>
  );
};
