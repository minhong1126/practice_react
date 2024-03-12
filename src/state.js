import { create } from 'zustand';

const useLoadingStore = create((set) => ({
    loading: true,
    setLoading: () => set(() => ({loading: false}))
}));

const useCoinsStore = create((set) => ({
    coins: [],
    setCoins: (state) => set(() => ({coins: state})) 
}));


export { useLoadingStore, useCoinsStore };