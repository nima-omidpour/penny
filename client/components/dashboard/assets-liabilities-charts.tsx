"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer } from "recharts"

const assetsData = [
  { value: 680000 },
  { value: 670000 },
  { value: 690000 },
  { value: 685000 },
  { value: 695000 },
  { value: 700000 },
]

const liabilitiesData = [
  { value: 90000 },
  { value: 88000 },
  { value: 95000 },
  { value: 98000 },
  { value: 97000 },
  { value: 100000 },
]

export function AssetsLiabilitiesCharts() {
  return (
    <>
      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardContent className="p-6">
          <div className="text-sm font-medium text-zinc-400">Total Assets</div>
          <div className="text-2xl font-bold text-white">$700,000</div>
          <div className="text-sm text-green-500">+500(2.8) vs last month</div>
          <div className="h-[80px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={assetsData}>
                <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardContent className="p-6">
          <div className="text-sm font-medium text-zinc-400">Total Liabilities</div>
          <div className="text-2xl font-bold text-white">$100,000</div>
          <div className="text-sm text-red-500">+500(2.8) vs last month</div>
          <div className="h-[80px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liabilitiesData}>
                <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

