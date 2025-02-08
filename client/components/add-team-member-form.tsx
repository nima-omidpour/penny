"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { TeamMember } from "@/types/team";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface AddTeamMemberFormProps {
  onSubmit: (member: Omit<TeamMember, "id">) => void;
}

export function AddTeamMemberForm({ onSubmit }: AddTeamMemberFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: "",
    salary: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch("http://localhost:3001/api/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add team member");
      }

      const data = await response.json();

      // Call the onSubmit prop if needed
      onSubmit(formData);

      // Show success toast with Sonner
      toast.success("Team member added successfully!");

      // Reset form
      setFormData({
        name: "",
        role: "",
        image: "",
        salary: "",
        address: "",
      });

      // Redirect or refresh the page
      router.refresh();
    } catch (error) {
      console.error("Error adding team member:", error);
      // Show error toast with Sonner
      toast.error("Failed to add team member");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="salary">Salary</Label>
        <Input
          id="salary"
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="address">Wallet Address</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          required
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add Team Member"}
      </Button>
    </form>
  );
}
