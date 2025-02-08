"use client";

import { AddTeamMemberForm } from "@/components/add-team-member-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { teamsApi } from "@/lib/api/endpoints/teams";
import { toast } from "@/components/ui/use-toast";

export default function AddTeamMember() {
  const router = useRouter();

  const handleAddMember = async (memberData: any) => {
    try {
      const response = await teamsApi.addTeamMember(memberData);

      if (response.success) {
        toast({
          title: "Success",
          description: "Team member added successfully",
        });
        router.push("/teams");
        router.refresh();
      } else {
        throw new Error(response.error || "Failed to add team member");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to add team member",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Add New Team Member</h1>
        <Button variant="outline" onClick={() => router.back()}>
          Back
        </Button>
      </div>
      <AddTeamMemberForm onSubmit={handleAddMember} />
    </div>
  );
}
