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
            setTheme: (theme) => {
                set(() => {
                    // Change the body class dynamically
                    document.body.classList.remove('latte', 'frappe', 'macchiato', 'mocha');
                    document.body.classList.add(theme);
                    return { theme };
                });
            },
        }),
        {
            name: 'relentnet-ls', // Key in localStorage
            onRehydrateStorage: () => (state) => {
                // Apply the saved theme to the body class when the app loads
                if (state?.theme) {
                    document.body.classList.add(state.theme);
                }
            },
        }
    )
);

export default useStore;
