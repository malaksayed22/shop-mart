import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCartAction } from "@/actions/cart.actions";
import CheckoutContent from "@/components/Checkout/CheckoutContent";

export default async function CheckoutPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const result = await getCartAction();

  if (!result.success || !result.data) {
    redirect("/cart");
  }

  const cartData = result.data.data;

  if (!cartData || !cartData.products || cartData.products.length === 0) {
    redirect("/cart");
  }

  return <CheckoutContent cart={cartData} />;
}
