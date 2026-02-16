"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Lock, ArrowLeft } from "lucide-react";
import { resetPasswordAction } from "@/actions/forgotPassword.actions";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) {
      toast.error("Email is required");
      router.push("/forgot-password");
    }
  }, [email, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!passwords.newPassword || !passwords.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (passwords.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    const result = await resetPasswordAction({
      email: email!,
      newPassword: passwords.newPassword,
    });

    if (result.success) {
      toast.success(result.message || "Password reset successfully!", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });
      // Redirect to login page
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } else {
      toast.error(result.error || "Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <Link
          href="/verify-reset-code"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Reset Password
            </CardTitle>
            <p className="text-sm text-gray-600 text-center mt-2">
              Enter your new password for <strong>{email}</strong>
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="newPassword"
                  className="flex items-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  New Password
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={passwords.newPassword}
                  onChange={(e) =>
                    setPasswords({ ...passwords, newPassword: e.target.value })
                  }
                  placeholder="Enter new password (min 6 characters)"
                  disabled={loading}
                  autoFocus
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={passwords.confirmPassword}
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Confirm new password"
                  disabled={loading}
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Resetting..." : "Reset Password"}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Remember your password?{" "}
                  <Link href="/login" className="text-blue-600 hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
