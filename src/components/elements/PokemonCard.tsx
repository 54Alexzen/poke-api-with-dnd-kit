import type { DraggableAttributes } from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { SortableButton } from "./SortableButton";
import { Divider } from "../ui/Divider";
import { getTypeColor } from "@/utils/colors-badges";
import type { Pokemon } from "@/types/pokemon-types";

interface PokemonCardProps {
  pokemon: Pokemon;
  dragHandleProps?: {
    attributes: DraggableAttributes;
    listeners: SyntheticListenerMap | undefined;
    isDragging: boolean;
  };
}

export const PokemonCard = ({ pokemon, dragHandleProps }: PokemonCardProps) => {
  return (
    <div
      className={`p-4 rounded-lg bg-stone-100 dark:bg-stone-800 ${
        dragHandleProps?.isDragging ? "shadow-xl border border-stone-400" : ""
      }`}
    >
      <SortableButton dragHandleProps={dragHandleProps} pokemon={pokemon.name} />
      <hr className="my-4 border-stone-300 dark:border-stone-700" />
      <div className="">
        <p className="bg-stone-300 dark:bg-stone-600 px-2 py-0.5 rounded-full text-2xs text-end w-fit">
          No. {pokemon.id}
        </p>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-24 object-contain mx-auto"
        />
      </div>

      <div>
        <p className="text-lg font-bold capitalize text-center">
          {pokemon.name}
        </p>

        <div>
          <p className="font-semibold text-sm mb-1.5 text-stone-600 dark:text-stone-400">
            {pokemon.types.length > 1 ? "Types" : "Type"}
          </p>
          <div className="flex space-x-2">
            {pokemon.types.map((type) => (
              <p
                key={type.slot}
                className={`md:text-xs text-2xs ${getTypeColor(type.type.name)} rounded px-2 py-0.5 w-fit capitalize`}
              >
                {type.type.name}
              </p>
            ))}
          </div>
        </div>

        <Divider text="Characteristics" className="my-4" />

        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="font-semibold text-sm text-stone-600 dark:text-stone-400">Height</p>
            <p className="md:text-xs text-2xs">{pokemon.height / 10}m</p>
          </div>
          <div>
            <p className="font-semibold text-sm text-stone-600 dark:text-stone-400">Weight</p>
            <p className="md:text-xs text-2xs">{pokemon.weight / 10}kg</p>
          </div>
          <div>
            <p className="font-semibold text-sm text-stone-600 dark:text-stone-400">XP</p>
            <p className="md:text-xs text-2xs">{pokemon.base_experience} xp</p>
          </div>
        </div>

        <Divider text="Statistics" className="my-4" />

        <div className="grid grid-cols-2 gap-3">
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className="flex flex-col">
              <p className="font-semibold text-sm capitalize text-stone-600 dark:text-stone-400">
                {stat.stat.name}
              </p>
              <p className="md:text-xs text-2xs">{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
