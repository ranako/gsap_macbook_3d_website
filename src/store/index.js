import { create } from 'zustand';

const useMacbookStore = create((set) => ({
    color: '#48464a',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    texture: '/videos/feature-1.mp4',
    setTexture: (texture) => set({ texture }),

    reset: () => set({ color: '#48464a', scale: 0.08, texture: '/videos/feature-1.mp4' }),
}))

export default useMacbookStore;