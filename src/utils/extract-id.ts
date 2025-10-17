export const extractIdFromUrl = (url: string): string => {
  const parts = url.split("/").filter((part) => part !== "");
  return parts.at(-1)!;
};
