import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Reports() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Reports</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download All
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle>Monthly Financial Report</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-400">
              Complete overview of your monthly financial activities, including income, expenses, and savings.
            </p>
            <Button variant="outline" className="mt-4">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-400">
              Detailed list of all transactions, including dates, amounts, and categories.
            </p>
            <Button variant="outline" className="mt-4">
              <Download className="mr-2 h-4 w-4" />
              Download History
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

