import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

const store = (set) => ({
    loading: true,
    setLoading: () => set(() => ({loading: false})),
    coins: [],
    setCoins: () => set((state) => ({coins: state}))
})

const useStore = create(devtools(store));

export default useStore;