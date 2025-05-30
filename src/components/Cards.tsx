'use client'

import SummaryCard from './SummaryCard'
import { useFinanceStore } from '@/store/useFinanceStore'

export default function SummarySection() {
  const income = useFinanceStore((state) => state.getTotalIncome())
  const expenses = useFinanceStore((state) => state.getTotalExpenses())
  const balance = useFinanceStore((state) => state.getBalance())

  return (
    <>
      <h2 className="text-2xl text-royalGold font-serif mb-4">Resumen Financiero</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <SummaryCard title="Ingresos" amount={`$${income.toLocaleString()}`} color="text-green-400" />
        <SummaryCard title="Gastos" amount={`$${expenses.toLocaleString()}`} color="text-red-400" />
        <SummaryCard title="Balance" amount={`$${balance.toFixed(2).toLocaleString()}`} color={balance >= 0 ? "text-green-400" : "text-vivianBlood"} />
      </div>
    </>
  )
}
