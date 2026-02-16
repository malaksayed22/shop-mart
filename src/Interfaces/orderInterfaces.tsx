export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export interface CartItem {
  count: number;
  _id: string;
  product: string;
  price: number;
  productTitle?: string; // Optional: added from server-side product fetch
}

export interface Order {
  _id: string;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
  id: number;
  user: string;
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  paidAt?: string;
  deliveredAt?: string;
}

export interface OrdersResponse {
  results: number;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  data: Order[];
}

export interface SingleOrderResponse {
  data: Order;
}

export interface CheckoutSessionResponse {
  status: string;
  session: {
    url: string;
  };
}
