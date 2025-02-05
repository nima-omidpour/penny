import { Card } from "@/components/ui/card";
import { Copy } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  salary: string;
  address: string;
}

export function TeamMemberCard({
  name,
  role,
  image,
  salary,
  address,
}: TeamMemberCardProps) {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800 p-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-3">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-20 h-20 rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        <p className="text-sm text-zinc-400 mb-4">{role}</p>
        <div className="w-full space-y-2">
          <div className="text-sm text-zinc-400">Salary: ${salary}</div>
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-400">
            <span>address: {address}</span>
            <button
              className="hover:text-white"
              onClick={() => {
                navigator.clipboard.writeText(address);
              }}
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
