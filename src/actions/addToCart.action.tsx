"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

export async function addToCartAction(productId: string) {
  const session = await getServerSession(authOptions);

  if (session) {
    const response = await fetch(`${process.env.API_URL}/cart`, {
      method: "POST",
      body: JSON.stringify({ productId }),
      headers: {
        token: session.token,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    // Revalidate all pages to update navbar badge
    revalidatePath("/", "layout");

    return data;
  } else {
    return null;
  }
}
