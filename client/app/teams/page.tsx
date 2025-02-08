"use client";

import { TeamMemberCard } from "@/components/team-member-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const teamMembers = [
  {
    id: 1,
    name: "David Hasse",
    role: "Backend Developer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-oT5ZkB7v03SrFG0sc0xoAF9ONU688f.png",
    salary: "100,000",
    address: "0x319",
  },
  {
    id: 2,
    name: "David Hasse",
    role: "Backend Developer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-oT5ZkB7v03SrFG0sc0xoAF9ONU688f.png",
    salary: "100,000",
    address: "0x319",
  },
  {
    id: 3,
    name: "David Hasse",
    role: "Backend Developer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-oT5ZkB7v03SrFG0sc0xoAF9ONU688f.png",
    salary: "100,000",
    address: "0x319",
  },
  {
    id: 4,
    name: "David Hasse",
    role: "Backend Developer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-oT5ZkB7v03SrFG0sc0xoAF9ONU688f.png",
    salary: "100,000",
    address: "0x319",
  },
];

export default function Teams() {
  const router = useRouter();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Team Members</h1>
        <Button onClick={() => router.push("/teams/add")}>
          Add Team Member
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}
