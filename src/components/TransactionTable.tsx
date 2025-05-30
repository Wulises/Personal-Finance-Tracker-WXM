'use client'
import { useFinanceStore } from '@/store/useFinanceStore'
import { motion, AnimatePresence } from 'framer-motion'

export default function TransactionTable() {
  const transactions = useFinanceStore((state) => state.transactions)

  return (
    <div className="overflow-x-auto rounded-lg border border-white/10">
      <table className="min-w-full divide-y divide-white/10 text-sm text-white">
        <thead className="bg-haruPurple text-xs uppercase tracking-wider text-white/70">
          <tr>
            <th className="px-4 py-2 text-left">Descripción</th>
            <th className="px-4 py-2 text-left">Monto</th>
            <th className="px-4 py-2 text-left">Tipo</th>
            <th className="px-4 py-2 text-left">Fecha</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          <AnimatePresence>
            {transactions.map((tx) => (
              <motion.tr
                key={tx.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white/5 hover:bg-white/10"
              >
                <td className="px-4 py-2">{tx.description}</td>
                <td className="px-4 py-2">
                  {tx.type === 'ingreso' ? '+' : '-'}${tx.amount.toFixed(2)}
                </td>
                <td className="px-4 py-2 capitalize">
                  {tx.type === 'ingreso' ? 'Ingreso' : 'Gasto'}
                </td>
                <td className="px-4 py-2">{new Date(tx.date).toLocaleDateString()}</td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  )
}
