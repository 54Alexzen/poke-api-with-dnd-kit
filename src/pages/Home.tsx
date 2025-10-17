import { SortableItem } from "@/components/elements/dnd/SorteableItem";
import { SortableItemWrapper } from "@/components/elements/dnd/SorteableItemWrapper";
import { PokemonCard } from "@/components/elements/PokemonCard";
import { EmptyState, LoaderState } from "@/components/elements/States";
import { useGetPokemons } from "@/hooks/useGetPokemons";
import type { DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { Footer } from "@/components/elements/Footer";
import { Header } from "@/components/elements/Header";

export default function Home() {
  const { fetchPokemons, pokemons, loading } = useGetPokemons();
  const [items, setItems] = useState(pokemons || []);
  const limitedPokemons = 100;

  useEffect(() => {
    fetchPokemons(limitedPokemons);
  }, [fetchPokemons]);

  useEffect(() => {
    setItems(pokemons || []);
  }, [pokemons]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id && over) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = [...items];
        const [movedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, movedItem);
        return newItems;
      });
    }
  };

  return (
    <main>
      <section className="min-h-[93svh] container flex flex-col items-center justify-center px-6 py-28 mx-auto relative">
        {loading ? (
          <LoaderState text={"Cargando pokemons..."} />
        ) : (
          <>
            {items && items.length > 0 ? (
              <>
                <Header />
                <SortableItemWrapper
                  itemsIds={items.map((item) => item.id)}
                  handleDragEnd={handleDragEnd}
                  restriction="parent"
                  sortableStrategy="grid"
                >
                  <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 w-full">
                    {items.map((pokemon) => (
                      <SortableItem key={pokemon.id} idItem={pokemon.id}>
                        {({ listeners, attributes, isDragging }) => (
                          <PokemonCard
                            pokemon={pokemon}
                            dragHandleProps={{
                              listeners,
                              attributes,
                              isDragging,
                            }}
                          />
                        )}
                      </SortableItem>
                    ))}
                  </div>
                </SortableItemWrapper>
              </>
            ) : (
              <EmptyState text="No se encontraron Pokemons :(" />
            )}
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
