import { create } from 'zustand'

export type Transaction = { 
  id: string
  type: 'ingreso' | 'gasto'
  amount: number
  description: string
  date: string
}

type FinanceState = {
  income: number
  expenses: number
  transactions: Transaction[]
  addTransaction: (transaction: Transaction) => void
  getBalance: () => number
  getTotalIncome: () => number
  getTotalExpenses: () => number
}

export const useFinanceStore = create<FinanceState>((set, get) => ({
  income: 12500,
  expenses: 6200,
  transactions: [
    {
      id: '1',
      type: 'ingreso',
      amount: 5000,
      description: 'Sueldo',
      date: '2025-05-01',
    },
    {
      id: '2',
      type: 'gasto',
      amount: 1200,
      description: 'Renta',
      date: '2025-05-02',
    },
    {
      id: '3',
      type: 'gasto',
      amount: 5000,
      description: 'Haru Figura',
      date: '2025-05-05',
    },
  ],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, transaction],
    })),
  getTotalIncome: () =>
  get().transactions
    .filter((t) => t.type === 'ingreso')
    .reduce((acc, t) => acc + t.amount, 0),

  getTotalExpenses: () =>
    get().transactions
      .filter((t) => t.type === 'gasto')
      .reduce((acc, t) => acc + t.amount, 0),
  getBalance: () => {
    const income = get().getTotalIncome()
    const expenses = get().getTotalExpenses()
    return income - expenses
  }
}))
