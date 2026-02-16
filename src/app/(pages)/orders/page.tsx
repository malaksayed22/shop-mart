import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserOrdersAction } from "@/actions/order.actions";
import OrdersContent from "@/components/Orders/OrdersContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Fetch orders for the authenticated user only
  const result = await getUserOrdersAction();

  console.log("Orders page result:", result);

  if (!result.success) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">My Orders</h1>
          <p className="text-red-500">
            {result.error || "Failed to load orders"}
          </p>
        </div>
      </div>
    );
  }

  const orders = result.data || [];
  // Reverse orders to show the most recent first
  const reversedOrders = [...orders].reverse();
  console.log("Passing orders to component:", reversedOrders);

  return <OrdersContent orders={reversedOrders} />;
}
