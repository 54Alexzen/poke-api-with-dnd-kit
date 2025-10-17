import type { Pokemon } from "@/types/pokemon-types";
import { getPokemonsService } from "@/service/pokemon-service";
import { extractIdFromUrl } from "@/utils/extract-id";
import { fetchPokemonById } from "@/utils/fetch-pokemon";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPokemons = useCallback(async (limit?: number) => {
    setLoading(true);
    try {
      const data = await getPokemonsService(limit);

      const pokemonDetailsPromises = data.results.map(async (pokemon) => {
        const id = extractIdFromUrl(pokemon.url);
        return await fetchPokemonById(id);
      });

      const pokemonDetails = await Promise.all(pokemonDetailsPromises);

      setPokemons(pokemonDetails);
    } catch (error) {
      console.error(error);
      toast.error("Error al cargar los pokémons");
    } finally {
      setLoading(false);
    }
  }, []);

  return { pokemons, loading, fetchPokemons };
};
