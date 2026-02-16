"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, ArrowLeft } from "lucide-react";
import { forgotPasswordAction } from "@/actions/forgotPassword.actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);
    const result = await forgotPasswordAction(email);

    if (result.success) {
      toast.success(result.message || "Reset code sent to your email!", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });
      // Redirect to verify code page with email
      router.push(`/verify-reset-code?email=${encodeURIComponent(email)}`);
    } else {
      toast.error(result.error || "Failed to send reset code");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <Link
          href="/login"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Forgot Password?
            </CardTitle>
            <p className="text-sm text-gray-600 text-center mt-2">
              Enter your email address and we'll send you a reset code
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={loading}
                  autoFocus
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Sending..." : "Send Reset Code"}
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
