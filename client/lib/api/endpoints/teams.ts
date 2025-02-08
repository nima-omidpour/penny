import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    // Get JWT token from headers
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Authorization token missing" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    // Fetch team members from your backend API at port 3001
    const response = await axios.get("http://localhost:3001/api/team", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error fetching team members:", error);

    const status = error.response?.status || 500;
    const message =
      error.response?.data?.error || "Failed to fetch team members";

    return NextResponse.json({ error: message }, { status: status });
  }
}
