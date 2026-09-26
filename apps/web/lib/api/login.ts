import type { LoginInput } from "@/lib/validators/login.schema";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function login(credentials: LoginInput): Promise<void> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Email ou senha incorretos.");
  }
}
