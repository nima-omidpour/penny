import { Trash2, Edit } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface TeamMemberCardProps {
  id: string;
  name: string;
  role: string;
  image: string;
  salary: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export function TeamMemberCard({
  id,
  name,
  role,
  image,
  salary,
  onDelete,
  onEdit,
}: TeamMemberCardProps) {
  console.log("Team member ID:", id);

  const isValidImageUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const imageSrc = isValidImageUrl(image)
    ? image
    : "https://via.placeholder.com/200";

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`http://localhost:3001/api/team/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete team member");
      }

      onDelete(id);

      toast.success("Team member deleted successfully!");
    } catch (error) {
      console.error("Error deleting team member:", error);
      toast.error("Failed to delete team member");
    }
  };

  const handleEdit = () => {
    onEdit(id);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm mt-2">Salary: ${salary}</p>
        <div className="flex gap-2 mt-4">
          <Button
            variant="secondary"
            size="sm"
            className="w-full gap-2"
            onClick={handleEdit}
          >
            <Edit className="h-4 w-4" />
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="w-full gap-2"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
