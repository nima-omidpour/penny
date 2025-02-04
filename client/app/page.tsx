import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to Penny – the smartest way to manage your finances!
        </h1>
        <p className="text-zinc-400 text-lg mb-8">
          Need an accounting assistant? Penny is here! 🚀 Penny automates salary payments for your team every month.
          Forget manual cash flow management—just connect your wallet, set payments, and get a balance sheet instantly!
        </p>

        <div className="space-y-6">
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-white mb-2">Automates salary payments:</h3>
              <p className="text-zinc-400">Set up recurring payments and let Penny handle the rest</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-white mb-2">Tracking transactions info add details about them</h3>
              <p className="text-zinc-400">Keep detailed records of all financial movements</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-white mb-2">Earn monthly yields by investing in DeFi</h3>
              <p className="text-zinc-400">Make your money work for you with smart DeFi investments</p>
            </CardContent>
          </Card>
        </div>

        <Button className="mt-8" size="lg">
          Try a example
        </Button>
      </div>
    </div>
  )
}

