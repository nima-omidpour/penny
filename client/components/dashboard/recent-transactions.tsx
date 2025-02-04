import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const transactions = [
  {
    id: "1",
    amount: "+$1,999.00",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    status: "success",
  },
  {
    id: "2",
    amount: "-$80.00",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    status: "pending",
  },
  {
    id: "3",
    amount: "+$14,000.00",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    status: "success",
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-8">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${transaction.name}.png`} alt={transaction.name} />
            <AvatarFallback>{transaction.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none text-white">{transaction.name}</p>
            <p className="text-sm text-zinc-400">{transaction.email}</p>
          </div>
          <div className="ml-auto font-medium">
            <span className={transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"}>
              {transaction.amount}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

