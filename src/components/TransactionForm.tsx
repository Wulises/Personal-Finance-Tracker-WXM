'use client'
import { useState } from 'react'
import { useFinanceStore } from '@/store/useFinanceStore'
import type { Transaction } from '@/store/useFinanceStore'

export default function TransactionForm() {
  const addTransaction = useFinanceStore((state) => state.addTransaction)

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState<'ingreso' | 'gasto'>('ingreso')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!description || !amount) return

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      description,
      amount,
      type,
      date: new Date().toISOString(),
    }

    addTransaction(newTransaction)
    setDescription('')
    setAmount(0)
    setType('ingreso')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-lg bg-darkBlack border border-haruPurple space-y-4">
      <div>
        <label className="block text-creamWhite">Descripción</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded bg-neutral-800 text-white"
          placeholder="Sueldo, comida, etc"
          required
        />
      </div>
      <div>
        <label className="block text-creamWhite">Monto</label>
        <input
          type="number"
          value={amount === 0 ? '' : amount}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          className="w-full p-2 rounded bg-neutral-800 text-white"
          placeholder="Ej. 3000"
          required
        />
      </div>
      <div>
        <label className="block text-creamWhite">Tipo</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'ingreso' | 'gasto')}
          className="w-full p-2 rounded bg-neutral-800 text-white"
        >
            <option value="ingreso"> Ingreso </option>
            <option value="gasto"> Gasto </option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-vivianBlood text-white py-2 rounded hover:bg-red-700 transition"
      >
        Agregar Transacción
      </button>
    </form>
  )
}
