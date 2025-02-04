import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$45,231.89</div>
            <p className="text-xs text-zinc-400">+20.1% from last month</p>
          </CardContent>
        </Card>
        {/* Add similar cards for other metrics */}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="bg-zinc-900/50 border-zinc-800 col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>
        <Card className="bg-zinc-900/50 border-zinc-800 col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

