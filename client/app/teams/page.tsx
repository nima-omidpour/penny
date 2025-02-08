"use client";

import { TeamMemberCard } from "@/components/team-member-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Users } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  profileImage: string;
  salary: number;
}

export default function Teams() {
  const router = useRouter();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await fetch("http://localhost:3001/api/team", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch team members");
        }

        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setError("Failed to load team members");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Team Members</h1>
          <Button disabled>Add Team Member</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-48 rounded-lg" />
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (teamMembers.length === 0 && !loading) {
    return (
      <div className="p-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-md">
          <div className="animate-bounce">
            <Users className="w-16 h-16 mx-auto mb-6 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No Team Members Found</h2>
          <p className="text-gray-600 mb-6">
            It looks like you haven't added any team members yet. Get started by
            adding your first team member!
          </p>
          <Button onClick={() => router.push("/teams/add")}>
            Add Team Member
          </Button>
        </div>
      </div>
    );
  }

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
          <TeamMemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.profileImage}
            salary={member.salary.toLocaleString()}
            address="" // Remove if not needed
          />
        ))}
      </div>
    </div>
  );
}
