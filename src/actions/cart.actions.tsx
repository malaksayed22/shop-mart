"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

export async function getCartAction() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/cart`, {
      headers: {
        token: session.token,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, error: data.message || "Failed to get cart" };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}

export async function updateCartQuantityAction(
  productId: string,
  count: number,
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
      {
        method: "PUT",
        headers: {
          token: session.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count }),
      },
    );

    const data = await response.json();

    if (response.ok) {
      // Revalidate all pages to update navbar badge
      revalidatePath("/", "layout");
      return { success: true, data };
    } else {
      return {
        success: false,
        error: data.message || "Failed to update quantity",
      };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}

export async function removeFromCartAction(productId: string) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/cart/${productId}`, {
      method: "DELETE",
      headers: {
        token: session.token,
      },
    });

    const data = await response.json();

    if (response.ok) {
      // Revalidate all pages to update navbar badge
      revalidatePath("/", "layout");
      return { success: true, data };
    } else {
      return { success: false, error: data.message || "Failed to remove item" };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}

export async function clearCartAction() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/cart`, {
      method: "DELETE",
      headers: {
        token: session.token,
      },
    });

    if (response.ok) {
      // Revalidate all pages to update navbar badge
      revalidatePath("/", "layout");
      return { success: true };
    } else {
      const data = await response.json();
      return { success: false, error: data.message || "Failed to clear cart" };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}

export async function applyCouponAction(couponCode: string) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v2/cart/applyCoupon`,
      {
        method: "PUT",
        headers: {
          token: session.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ coupon: couponCode }),
      },
    );

    const data = await response.json();

    if (response.ok) {
      revalidatePath("/", "layout");
      return { success: true, data };
    } else {
      return {
        success: false,
        error: data.message || "Failed to apply coupon",
      };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}
