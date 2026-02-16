"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

export async function addToWishlistAction(productId: string) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/wishlist`, {
      method: "POST",
      headers: {
        token: session.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    const data = await response.json();

    if (response.ok) {
      revalidatePath("/", "layout");
      return { success: true, data };
    } else {
      return {
        success: false,
        error: data.message || "Failed to add to wishlist",
      };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}

export async function removeFromWishlistAction(productId: string) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(
      `${process.env.API_URL}/wishlist/${productId}`,
      {
        method: "DELETE",
        headers: {
          token: session.token,
        },
      },
    );

    const data = await response.json();

    if (response.ok) {
      revalidatePath("/", "layout");
      return { success: true, data };
    } else {
      return {
        success: false,
        error: data.message || "Failed to remove from wishlist",
      };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}

export async function getWishlistProductIds() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return [];
  }

  try {
    const response = await fetch(`${process.env.API_URL}/wishlist`, {
      headers: {
        token: session.token,
      },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      return data.data?.map((item: any) => item._id) || [];
    }
    return [];
  } catch (error) {
    return [];
  }
}
