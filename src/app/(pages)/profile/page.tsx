import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import ProfileContent from "@/components/Profile/ProfileContent";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Fetch user data
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/users/getMe`,
    {
      headers: {
        token: session.token,
      },
      cache: "no-store",
    },
  );

  let userData = null;
  if (response.ok) {
    const data = await response.json();
    userData = data.data || null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your account settings</p>
        </div>

        {userData ? (
          <ProfileContent userData={userData} />
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-600">Failed to load profile data</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
