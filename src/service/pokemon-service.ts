import type {
  PokemonDetailResponse,
  PokemonListResponse,
} from "@/types/pokemon-types";
import { API_ENDPOINTS } from "@/constants/api-constant";
import { API_SERVICE } from "./api-service";

export const getPokemonsService = async (
  limit?: number
): Promise<PokemonListResponse> => {
  const limitParam = limit ? `?limit=${limit}` : API_ENDPOINTS.LIMIT;
  return await API_SERVICE.GET(API_ENDPOINTS.POKEMONS + limitParam);
};

export const getPokemonService = async (
  id: string
): Promise<PokemonDetailResponse> => {
  return await API_SERVICE.GET(`${API_ENDPOINTS.POKEMONS}/${id}`);
};
