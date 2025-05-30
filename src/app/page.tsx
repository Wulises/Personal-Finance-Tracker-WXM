'use client'

import Makoto from '@/components/Sidebar'
import Header from '../components/Header'
import Sumeri from '@/components/SummaryCard'
import TransactionTable from '@/components/TransactionTable'
import TransactionForm from '@/components/TransactionForm'
import FinanceChart from '@/components/FinanceChart'
import Kasumi from '@/components/Cards'


import { useFinanceStore } from '@/store/useFinanceStore'

export default function HaruHome() {

  const getTotalIncome = useFinanceStore((state) => state.getTotalIncome)
  const getTotalExpenses = useFinanceStore((state) => state.getTotalExpenses)
  const getBalance = useFinanceStore((state) => state.getBalance)

  const income = getTotalIncome()
  const expenses = getTotalExpenses()
  const balance = getBalance()

  return (
    <div className="flex">
      <Makoto />
      <div className="flex flex-col flex-1 ml-60 min-h-screen">
        <Header />
        <main className="p-6 p-6 space-y-8">

          <h2 className="text-2xl text-royalGold font-serif mb-4 ">Resumen Financiero</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Sumeri title="Ingresos" amount={ `$${income.toLocaleString()} ` }              color="text-green-400" />
            <Sumeri title="Gastos"   amount={ `$${expenses.toLocaleString()}` }             color="text-red-400" />
            <Sumeri title="Balance"  amount={ `$${balance.toFixed(2).toLocaleString()} ` }  color="text-haruPurple" />
          </div>

          {/* Aquí van las cards, gráficos, etc */}
          <Kasumi />
          <TransactionTable />

          <TransactionForm />

          
          <FinanceChart />

        </main>
      </div>
    </div>
  )
}
