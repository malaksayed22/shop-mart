import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WishlistRes } from "@/Interfaces/wishlistInterfaces";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WishlistContent from "@/components/Wishlist/WishlistContent";

export default async function WishlistPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Please Login</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You need to be logged in to view your wishlist.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const response = await fetch(`${process.env.API_URL}/wishlist`, {
    headers: {
      token: session.token,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return <WishlistContent initialItems={[]} token={session.token} />;
  }

  const wishlistData: WishlistRes = await response.json();

  return (
    <WishlistContent
      initialItems={wishlistData.data || []}
      token={session.token}
    />
  );
}
