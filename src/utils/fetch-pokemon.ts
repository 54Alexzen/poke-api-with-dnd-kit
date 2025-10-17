import type { Pokemon } from "@/types/pokemon-types";
import { getPokemonService } from "@/service/pokemon-service";

export const fetchPokemonById = async (id: string): Promise<Pokemon> => {
  const data = await getPokemonService(id);

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types,
    height: data.height,
    weight: data.weight,
    base_experience: data.base_experience,
    stats: data.stats,
  };
};
