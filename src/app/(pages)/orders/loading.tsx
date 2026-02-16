export default function OrdersLoading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="text-center">
        {/* ShopMart Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-black flex items-center justify-center mr-3 shadow-lg rounded">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <span className="text-3xl font-bold text-black">ShopMart</span>
        </div>

        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-gray-100 border-b-gray-400 rounded-full animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <p className="mt-6 text-gray-600 text-lg">Loading your orders...</p>
      </div>
    </div>
  );
}
