/* ./src/store.js */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
    persist(
        (set) => ({
            // Counter state
            count: 0,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
            reset: () => set({ count: 0 }),

            // Theme state
            theme: 'mocha', // Default theme
            setTheme: (theme) => set({ theme }),
        }),
        {
            name: 'relentnet-ls', // Key in localStorage
            partialize: (state) => ({ theme: state.theme }), // Persist only the theme
        }
    )
);

export default useStore;
