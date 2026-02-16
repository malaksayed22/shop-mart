"use server";

export async function forgotPasswordAction(email: string) {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      },
    );

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: data.message || "Reset code sent to your email",
        statusMsg: data.statusMsg,
      };
    } else {
      return {
        success: false,
        error:
          data.message || data.errors?.[0]?.msg || "Failed to send reset code",
      };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}

export async function verifyResetCodeAction(resetCode: string) {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resetCode }),
      },
    );

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        status: data.status,
      };
    } else {
      return {
        success: false,
        error: data.message || data.errors?.[0]?.msg || "Invalid reset code",
      };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}

export async function resetPasswordAction(formData: {
  email: string;
  newPassword: string;
}) {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        token: data.token,
        message: "Password reset successfully",
      };
    } else {
      return {
        success: false,
        error:
          data.message || data.errors?.[0]?.msg || "Failed to reset password",
      };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
}
