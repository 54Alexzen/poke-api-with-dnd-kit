import Pokemon from "@/assets/svgs/pokemon.svg";

interface StateProps {
  text?: string;
}

export const EmptyState = ({ text }: StateProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="md:w-64 sm:w-60 xs:w-56">
        <img src={Pokemon} alt="Logo Pokémon"/>
      </div>
      <p className="mt-8 text-center font-medium md:text-xl sm:text-lg text-base uppercase">
        {text || "Información no encontrada"}
      </p>
    </div>
  );
};

export const LoaderState = ({ text }: StateProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="md:w-64 sm:w-60 xs:w-56">
        <img src={Pokemon} alt="Logo Pokémon" className="animate-pulse"/>
      </div>
      <p className="mt-8 text-center font-medium md:text-xl sm:text-lg text-base uppercase">
        {text || "Cargando..."}
      </p>
    </div>
  );
};
