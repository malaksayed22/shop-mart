"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Shield, ArrowLeft } from "lucide-react";
import { verifyResetCodeAction } from "@/actions/forgotPassword.actions";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function VerifyResetCodePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [resetCode, setResetCode] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) {
      toast.error("Email is required");
      router.push("/forgot-password");
    }
  }, [email, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resetCode.trim()) {
      toast.error("Please enter the reset code");
      return;
    }

    setLoading(true);
    const result = await verifyResetCodeAction(resetCode);

    if (result.success) {
      toast.success("Code verified successfully!", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });
      // Redirect to reset password page with email
      router.push(`/reset-password?email=${encodeURIComponent(email!)}`);
    } else {
      toast.error(result.error || "Invalid reset code");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <Link
          href="/forgot-password"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Verify Reset Code
            </CardTitle>
            <p className="text-sm text-gray-600 text-center mt-2">
              Enter the code sent to <strong>{email}</strong>
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resetCode" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Reset Code
                </Label>
                <Input
                  id="resetCode"
                  type="text"
                  value={resetCode}
                  onChange={(e) => setResetCode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  disabled={loading}
                  autoFocus
                  maxLength={6}
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Verifying..." : "Verify Code"}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Didn't receive the code?{" "}
                  <Link
                    href="/forgot-password"
                    className="text-blue-600 hover:underline"
                  >
                    Resend
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
