import { Bitcoin, CircleDollarSign } from "lucide-react"

const assets = [
  {
    name: "Bitcoin",
    icon: Bitcoin,
    percentage: "9.74%",
    value: "$4000",
    change: "+$1000( 5% )",
    changeColor: "text-green-500",
  },
  {
    name: "USDT",
    icon: CircleDollarSign,
    percentage: "9.74%",
    value: "$4000",
    change: "+$1000( 5% )",
    changeColor: "text-green-500",
  },
  {
    name: "ethereum",
    icon: CircleDollarSign,
    percentage: "9.74%",
    value: "$4000",
    change: "+$1000( 5% )",
    changeColor: "text-green-500",
  },
]

export function AssetsList() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 text-sm text-zinc-400">
        <div>Name</div>
        <div className="text-right">% OF ASSETS</div>
        <div className="text-right">VALUE</div>
        <div className="text-right">CHANGE</div>
      </div>
      {assets.map((asset) => (
        <div key={asset.name} className="grid grid-cols-4 items-center">
          <div className="flex items-center gap-2">
            <asset.icon className="h-5 w-5" />
            <span className="font-medium text-white">{asset.name}</span>
          </div>
          <div className="text-right text-zinc-400">{asset.percentage}</div>
          <div className="text-right text-white">{asset.value}</div>
          <div className={`text-right ${asset.changeColor}`}>{asset.change}</div>
        </div>
      ))}
    </div>
  )
}

