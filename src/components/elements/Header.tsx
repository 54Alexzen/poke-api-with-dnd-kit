import Pokemon from "@/assets/svgs/pokemon.svg";
import { FloatingToolbar } from "./FloatingToolbar";

export const Header = () => {
  return (
    <header className="fixed w-full top-0 backdrop-blur-md bg-stone-50/50 dark:bg-stone-900/50 border-b dark:border-stone-700 border-stone-300 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-sm sm:block hidden">
          <p className="font-bold">Pokemón API</p>
          <p>with dnd/kit</p>
        </div>
        <div className="lg:w-32 md:w-28 sm:w-24 w-20">
          <img src={Pokemon} alt="Logo Pokémon" />
        </div>
        <FloatingToolbar />
      </div>
    </header>
  );
};
