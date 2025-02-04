"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { date: "Mar 1", value: 650000 },
  { date: "Mar 2", value: 640000 },
  { date: "Mar 3", value: 660000 },
  { date: "Mar 4", value: 655000 },
  { date: "Mar 5", value: 670000 },
  { date: "Mar 6", value: 680000 },
  { date: "Mar 7", value: 690000 },
  { date: "Mar 8", value: 700000 },
]

export function NetWorthChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
        />
        <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

