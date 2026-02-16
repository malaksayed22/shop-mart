import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { CartRes } from "@/Interfaces/cartInterfaces";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CartContent from "@/components/Cart/CartContent";

export default async function CartPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Please Login</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You need to be logged in to view your cart.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const response = await fetch(`${process.env.API_URL}/cart`, {
    headers: {
      token: session.token,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <CartContent
        initialItems={[]}
        numOfCartItems={0}
        totalCartPrice={0}
        totalPriceAfterDiscount={undefined}
        appliedCoupon={undefined}
        token={session.token}
      />
    );
  }

  const cartData: CartRes = await response.json();

  // Defensive check for cart data structure
  if (!cartData?.data || !cartData?.data?.products) {
    return (
      <CartContent
        initialItems={[]}
        numOfCartItems={0}
        totalCartPrice={0}
        totalPriceAfterDiscount={undefined}
        appliedCoupon={undefined}
        token={session.token}
      />
    );
  }

  return (
    <CartContent
      initialItems={cartData.data.products || []}
      numOfCartItems={cartData.numOfCartItems || 0}
      totalCartPrice={cartData.data.totalCartPrice || 0}
      totalPriceAfterDiscount={cartData.data.totalPriceAfterDiscount}
      appliedCoupon={cartData.data.coupon}
      token={session.token}
    />
  );
}
