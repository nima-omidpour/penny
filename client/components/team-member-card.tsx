import { Card } from "@/components/ui/card";
import { Copy } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  salary: string;
}

export function TeamMemberCard({
  name,
  role,
  image,
  salary,
}: TeamMemberCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img
        src={image || "/default-profile.png"}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm mt-2">Salary: ${salary}</p>
      </div>
    </div>
  );
}
