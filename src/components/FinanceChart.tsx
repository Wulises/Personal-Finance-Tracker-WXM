'use client'

import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useFinanceStore } from '@/store/useFinanceStore'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function FinanceChart() {
    
  const transactions = useFinanceStore((state) => state.transactions)

  const ingresos = transactions.filter((t) => t.type === 'ingreso')
  const gastos = transactions.filter((t) => t.type === 'gasto')

  const totalIngresos = ingresos.reduce((acc, t) => acc + t.amount, 0)
  const totalGastos = gastos.reduce((acc, t) => acc + t.amount, 0)

  const data = {
    labels: ['Ingresos', 'Gastos'],
    datasets: [
      {
        data: [totalIngresos, totalGastos],
        backgroundColor: ['#8B5CF6', '#EF4444'],
        borderColor: '#000',
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="max-w-sm mx-auto  p-4 rounded-2xl shadow-lg">
      <h2 className="text-white text-lg font-semibold mb-4 text-center">Distribución de Finanzas</h2>
      <Pie data={data} />
    </div>
  )
}
