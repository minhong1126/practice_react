import { create } from 'zustand';

const useStore = create(set => ({
    cnt: 0,
    setCnt: () => set(state => ({ cnt: state.cnt + 1})),
    setZero: () => set({cnt: 0})
}))

export default useStore;