type SummaryCardProps = {
  title: string
  amount: string
  color?: string
}

export default function SummaryCard({ title, amount, color = 'text-creamWhite' }: SummaryCardProps) {
  return (
    <div className="bg-softCard rounded-2xl shadow-md p-6 w-full max-w-sm transition hover:scale-[1.02] duration-300">
      <h3 className={`text-sm font-semibold ${color}`}>{title}</h3>
      <p className="text-2xl font-serif text-royalGold mt-2">{amount}</p>
    </div>
  )
}
