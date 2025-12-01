import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

export default function Header({ ontoggleCart }) {
  const selectTotalItems = (state) => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
  };
  const totalItems = useSelector(selectTotalItems);
  return (
    <>
      <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-40 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-1">
              <h2 className="text-4xl font-bold text-gray-900">eCart</h2>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search Product"
                className="bg-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 w-2xl"
              />
            </div>
            <button
              className="relative p-2 bg-gray-300 text-gray-700 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
              onClick={ontoggleCart}
            >
              <ShoppingCart className="w-6 h-6" />

              {totalItems > 0 && (
                <span className="absolute -top-3 right-0 text-white text-xs font-semibold rounded-full w-6 h-6 bg-violet-500 flex items-center justify-center">
                  
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
