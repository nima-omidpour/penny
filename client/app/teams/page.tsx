import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Teams() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-white">Teams</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Alice", "Bob", "Charlie"].map((name) => (
                <div key={name} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`https://avatar.vercel.sh/${name}.png`} />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium text-white">{name}</div>
                    <div className="text-xs text-zinc-400">Team Member</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

