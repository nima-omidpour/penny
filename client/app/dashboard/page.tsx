import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NetWorthChart } from "@/components/dashboard/net-worth-chart"
import { AssetsLiabilitiesCharts } from "@/components/dashboard/assets-liabilities-charts"
import { AssetsList } from "@/components/dashboard/assets-list"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">Net worth</CardTitle>
          <Button variant="outline" size="sm" className="h-8">
            1M
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white mb-4">$700,000</div>
          <NetWorthChart />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <AssetsLiabilitiesCharts />
      </div>

      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-x-2">
            <Button variant="secondary" size="sm" className="h-8">
              Assets
            </Button>
            <Button variant="ghost" size="sm" className="h-8">
              Liabilities
            </Button>
          </div>
          <Button variant="outline" size="sm" className="h-8">
            1M
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <AssetsList />
        </CardContent>
      </Card>
    </div>
  )
}

