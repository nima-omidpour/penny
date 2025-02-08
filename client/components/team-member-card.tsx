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
        src={
          image ||
          "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=200&h=200"
        }
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p>{image}</p>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm mt-2">Salary: ${salary}</p>
      </div>
    </div>
  );
}
