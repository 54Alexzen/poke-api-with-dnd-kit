const TYPE_COLORS: { [key: string]: string } = {
  normal: "bg-stone-300/50",
  fire: "bg-red-400/50",
  water: "bg-blue-400/50",
  electric: "bg-yellow-300/50",
  grass: "bg-green-400/50",
  ice: "bg-cyan-200/50",
  fighting: "bg-orange-400/50",
  poison: "bg-purple-400/50",
  ground: "bg-yellow-600/50",
  flying: "bg-sky-200/50",
  psychic: "bg-pink-400/50",
  bug: "bg-lime-400/50",
  rock: "bg-yellow-800/50",
  ghost: "bg-violet-700/50",
  dragon: "bg-indigo-700/50",
  dark: "bg-gray-700/50",
  steel: "bg-slate-400/50",
  fairy: "bg-fuchsia-300/50",
};

;

export const getTypeColor = (type: string) =>
  TYPE_COLORS[type] || "bg-stone-300/20";