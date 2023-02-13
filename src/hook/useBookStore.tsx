import create from 'zustand';

interface IBook {
    amount: number
    updateAmount: (newAmount: number) => void
    decreaseAmount: (newAmount: number) => void
}

export const useBookStore = create<IBook>((set, get) => ({
    amount: 40,
    updateAmount: (newAmount: number) => {
        const amountState = get().amount
        set({ amount: newAmount + amountState })
    },
    decreaseAmount: (newAmount: number) => {
        const amountState = get().amount
        if (amountState <= 0) {
            set({ amount: 0 })
        } else {
            set({ amount: amountState - newAmount })
        }
    }
}));