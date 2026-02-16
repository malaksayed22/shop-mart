"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import {
  OrdersResponse,
  SingleOrderResponse,
  CheckoutSessionResponse,
} from "@/Interfaces/orderInterfaces";

const API_URL = "https://ecommerce.routemisr.com/api/v1";
const API_V2_URL = "https://ecommerce.routemisr.com/api/v2";

// Fetch product details by ID
export async function getProductByIdAction(productId: string): Promise<{
  success: boolean;
  data?: { title: string; imageCover?: string };
  error?: string;
}> {
  try {
    const response = await fetch(`${API_URL}/products/${productId}`, {
      cache: "no-store",
    });

    const responseData = await response.json();

    if (response.ok && responseData.data) {
      return {
        success: true,
        data: {
          title: responseData.data.title,
          imageCover: responseData.data.imageCover,
        },
      };
    } else {
      return {
        success: false,
        error: responseData.message || "Failed to fetch product",
      };
    }
  } catch (error) {
    console.error("Get product error:", error);
    return { success: false, error: "An error occurred" };
  }
}

// Get All Orders
export async function getAllOrdersAction(): Promise<{
  success: boolean;
  data?: OrdersResponse;
  error?: string;
}> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(`${API_URL}/orders/`, {
      headers: {
        token: session.token,
      },
      cache: "no-store",
    });

    const data = await response.json();

    console.log("Get all orders response:", { status: response.status, data });

    if (response.ok) {
      return { success: true, data };
    } else {
      return {
        success: false,
        error: data.message || "Failed to fetch orders",
      };
    }
  } catch (error) {
    console.error("Get all orders error:", error);
    return { success: false, error: "An error occurred" };
  }
}

// Create Cash Order From Cart
export async function createCashOrderAction(
  cartId: string,
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
  },
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(`${API_V2_URL}/orders/${cartId}`, {
      method: "POST",
      headers: {
        token: session.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shippingAddress }),
    });

    const data = await response.json();

    console.log("Create cash order response:", {
      status: response.status,
      data,
      cartId,
      shippingAddress,
    });

    if (response.ok) {
      revalidatePath("/cart", "page");
      revalidatePath("/orders", "page");
      revalidatePath("/", "layout");
      console.log("Order created successfully, revalidating paths...");
      return {
        success: true,
        data,
        message: "Order created successfully",
      };
    } else {
      console.error("Create cash order error:", data);

      // Handle specific error cases
      if (
        response.status === 500 &&
        data.message?.includes("Pool was force destroyed")
      ) {
        return {
          success: false,
          error:
            "Server is temporarily unavailable. Please try again in a moment.",
        };
      }

      return {
        success: false,
        error: data.message || "Failed to create order",
      };
    }
  } catch (error) {
    console.error("Create cash order exception:", error);
    return {
      success: false,
      error: "Network error. Please check your connection and try again.",
    };
  }
}

// Get specific order by ID
export async function getOrderByIdAction(
  orderId: string,
): Promise<{ success: boolean; data?: SingleOrderResponse; error?: string }> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(`${API_URL}/orders/${orderId}`, {
      headers: {
        token: session.token,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    } else {
      return {
        success: false,
        error: data.message || "Failed to fetch order",
      };
    }
  } catch (error) {
    console.error("Get order error:", error);
    return { success: false, error: "An error occurred" };
  }
}

// Get all user orders
export async function getUserOrdersAction(userId?: string): Promise<{
  success: boolean;
  data?: OrdersResponse;
  error?: string;
}> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    // If userId is not provided, fetch it
    let finalUserId = userId;
    if (!finalUserId) {
      const userResponse = await fetch(`${API_URL}/users/getMe`, {
        headers: {
          token: session.token,
        },
        cache: "no-store",
      });

      console.log("Get user data response:", { status: userResponse.status });

      if (!userResponse.ok) {
        const errorData = await userResponse.json().catch(() => ({}));
        console.error("Failed to get user data:", errorData);
        return { success: false, error: "Failed to get user data" };
      }

      const userData = await userResponse.json();
      console.log("User data retrieved:", userData);
      finalUserId = userData.data?._id;

      if (!finalUserId) {
        return { success: false, error: "User ID not found" };
      }
    }

    // Get user orders
    const response = await fetch(`${API_URL}/orders/user/${finalUserId}`, {
      headers: {
        token: session.token,
      },
      cache: "no-store",
    });

    const responseData = await response.json();

    console.log("Get orders response:", {
      status: response.status,
      data: responseData,
    });

    // Log cart items details to see the structure
    if (
      responseData.data &&
      responseData.data.length > 0 &&
      responseData.data[0].cartItems
    ) {
      console.log(
        "First order cart items:",
        JSON.stringify(responseData.data[0].cartItems, null, 2),
      );
    }

    if (response.ok) {
      // Extract the actual orders array from the response
      const ordersArray = responseData.data || responseData || [];
      return { success: true, data: ordersArray };
    } else {
      return {
        success: false,
        error: responseData.message || "Failed to fetch orders",
      };
    }
  } catch (error) {
    console.error("Get user orders error:", error);
    return { success: false, error: "An error occurred" };
  }
}

// Create checkout session for online payment
export async function createCheckoutSessionAction(
  cartId: string,
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
  },
): Promise<{
  success: boolean;
  data?: CheckoutSessionResponse;
  error?: string;
}> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(
      `${API_URL}/orders/checkout-session/${cartId}?url=${encodeURIComponent("http://localhost:3000")}`,
      {
        method: "POST",
        headers: {
          token: session.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ shippingAddress }),
      },
    );

    const data = await response.json();

    console.log("Checkout session response:", {
      status: response.status,
      data,
    });

    if (response.ok) {
      revalidatePath("/cart");
      revalidatePath("/orders");
      return { success: true, data };
    } else {
      return {
        success: false,
        error: data.message || "Failed to create checkout session",
      };
    }
  } catch (error) {
    console.error("Checkout session error:", error);
    return { success: false, error: "An error occurred" };
  }
}
