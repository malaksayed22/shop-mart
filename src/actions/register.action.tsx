"use server";

export async function registerAction(data: {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}) {
  try {
    const response = await fetch(`${process.env.API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, message: result.message };
    } else {
      return { success: false, error: result.message || "Registration failed" };
    }
  } catch (error) {
    return { success: false, error: "An error occurred during registration" };
  }
}
