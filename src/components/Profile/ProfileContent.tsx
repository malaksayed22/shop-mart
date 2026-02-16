"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { User, Lock, Mail, Phone } from "lucide-react";
import {
  updateUserDataAction,
  changePasswordAction,
} from "@/actions/user.actions";
import { useRouter } from "next/navigation";

interface ProfileContentProps {
  userData: {
    name: string;
    email: string;
    phone?: string;
    role?: string;
  };
}

export default function ProfileContent({ userData }: ProfileContentProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  // Store original user data for comparison
  const originalData = {
    name: userData.name || "",
    email: userData.email || "",
    phone: userData.phone || "",
  };

  // Profile data state
  const [profileData, setProfileData] = useState({
    name: userData.name || "",
    email: userData.email || "",
    phone: userData.phone || "",
  });

  // Password change state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    password: "",
    rePassword: "",
  });

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!profileData.name.trim() || !profileData.email.trim()) {
      toast.error("Name and email are required");
      return;
    }

    // Check if anything actually changed
    const hasChanges =
      profileData.name !== originalData.name ||
      profileData.email !== originalData.email ||
      profileData.phone !== originalData.phone;

    if (!hasChanges) {
      toast.error("No changes detected");
      return;
    }

    setLoading("profile");
    const result = await updateUserDataAction(profileData);

    if (result.success) {
      toast.success(result.message || "Profile updated successfully!", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });
      router.refresh();
    } else {
      toast.error(result.error || "Failed to update profile");
    }
    setLoading(null);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !passwordData.currentPassword ||
      !passwordData.password ||
      !passwordData.rePassword
    ) {
      toast.error("All password fields are required");
      return;
    }

    if (passwordData.password !== passwordData.rePassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (passwordData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading("password");
    const result = await changePasswordAction(passwordData);

    if (result.success) {
      toast.success(result.message || "Password changed successfully!", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });
      setPasswordData({
        currentPassword: "",
        password: "",
        rePassword: "",
      });
    } else {
      toast.error(result.error || "Failed to change password");
    }
    setLoading(null);
  };

  return (
    <div className="space-y-6">
      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={profileData.name}
                onChange={(e) =>
                  setProfileData({ ...profileData, name: e.target.value })
                }
                placeholder="Enter your name"
                disabled={loading === "profile"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
                placeholder="Enter your email"
                disabled={loading === "profile"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={profileData.phone}
                onChange={(e) =>
                  setProfileData({ ...profileData, phone: e.target.value })
                }
                placeholder="Enter your phone number"
                disabled={loading === "profile"}
              />
            </div>

            <Button
              type="submit"
              disabled={loading === "profile"}
              className="w-full"
            >
              {loading === "profile" ? "Updating..." : "Update Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Change Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    currentPassword: e.target.value,
                  })
                }
                placeholder="Enter current password"
                disabled={loading === "password"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                value={passwordData.password}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    password: e.target.value,
                  })
                }
                placeholder="Enter new password (min 6 characters)"
                disabled={loading === "password"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rePassword">Confirm New Password</Label>
              <Input
                id="rePassword"
                type="password"
                value={passwordData.rePassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    rePassword: e.target.value,
                  })
                }
                placeholder="Confirm new password"
                disabled={loading === "password"}
              />
            </div>

            <Button
              type="submit"
              disabled={loading === "password"}
              className="w-full"
            >
              {loading === "password" ? "Changing..." : "Change Password"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Account Details */}
      <Card>
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Email:</span>
            <span className="font-semibold">{userData.email}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Name:</span>
            <span className="font-semibold">{userData.name}</span>
          </div>
          {userData.phone && (
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Phone:</span>
              <span className="font-semibold">{userData.phone}</span>
            </div>
          )}
          {userData.role && (
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Role:</span>
              <span className="font-semibold capitalize">{userData.role}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
