import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChatInput } from "@/components/chat-input";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto flex items-center justify-center">
        <div className="max-w-3xl w-full px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-6">
            Welcome to Penny – the smartest way to manage your finances!
          </h1>
          <p className="text-zinc-400 text-lg mb-8">
            Need an accounting assistant? Penny is here! 🚀 Penny automates
            salary payments for your team every month. Forget manual cash flow
            management—just connect your wallet, set payments, and get a balance
            sheet instantly!
          </p>

          <div className="space-y-4 mb-8">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-white mb-1">
                  Automates salary payments:
                </h3>
                <p className="text-xs text-zinc-400">
                  Set up recurring payments and let Penny handle the rest
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-white mb-1">
                  tracking transactions info add details about them
                </h3>
                <p className="text-xs text-zinc-400">
                  Keep detailed records of all financial movements
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-white mb-1">
                  Earn monthly yields by investing in DeFi
                </h3>
                <p className="text-xs text-zinc-400">
                  Make your money work for you with smart DeFi investments
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 bg-gradient-to-t from-background to-background/80 backdrop-blur-xl border-zinc-800">
        <ChatInput />
      </div>
    </div>
  );
}
