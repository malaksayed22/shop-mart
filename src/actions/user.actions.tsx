"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

export async function updateUserDataAction(formData: {
  name: string;
  email: string;
  phone: string;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
      {
        method: "PUT",
        headers: {
          token: session.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await response.json();

    console.log("Update profile response:", { status: response.status, data });

    if (response.ok) {
      revalidatePath("/profile");
      return { success: true, data, message: "Profile updated successfully" };
    } else {
      console.error("Update profile error:", data);

      // Handle the specific error structure from the API
      let errorMessage = "Failed to update profile";

      if (data.errors) {
        // Handle single error object
        if (data.errors.msg) {
          errorMessage = data.errors.msg;
        }
        // Handle array of errors
        else if (Array.isArray(data.errors) && data.errors[0]?.msg) {
          errorMessage = data.errors[0].msg;
        }
      } else if (data.message && data.message !== "fail") {
        errorMessage = data.message;
      }

      return {
        success: false,
        error: errorMessage,
      };
    }
  } catch (error) {
    console.error("Update profile exception:", error);
    return { success: false, error: "An error occurred" };
  }
}

export async function changePasswordAction(formData: {
  currentPassword: string;
  password: string;
  rePassword: string;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
      {
        method: "PUT",
        headers: {
          token: session.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await response.json();

    console.log("Change password response:", { status: response.status, data });

    if (response.ok) {
      return { success: true, data, message: "Password changed successfully" };
    } else {
      console.error("Change password error:", data);
      return {
        success: false,
        error:
          data.message || data.errors?.[0]?.msg || "Failed to change password",
      };
    }
  } catch (error) {
    console.error("Change password exception:", error);
    return { success: false, error: "An error occurred" };
  }
}

export async function getUserDataAction() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/users/getMe`, {
      headers: {
        token: session.token,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data: data.data };
    } else {
      return {
        success: false,
        error: data.message || "Failed to fetch user data",
      };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}
