import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUIStore = create(
  persist(
    (set, get) => ({
      favorites: {},
      filters: {
        city: "",
        minPrice: 0,
        maxPrice: 1000,
        minRating: 0,
        sort: "price_asc",
      },
      toggleFavorite: (id) => {
        const favs = { ...get().favorites };
        favs[id] = !favs[id];
        set({ favorites: favs });
      },
      setFilters: (f) => set({ filters: { ...get().filters, ...f } }),
    }),
    { name: "ui-store" }
  )
);
