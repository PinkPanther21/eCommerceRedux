import {Star} from 'lucide-react'
import { useDispatch } from "react-redux"
import { addtoCart } from "../store/cartSlice"

export default function ProductCard({ product }) {
    
    const dispatch = useDispatch()

    const handleCart = ()=>{
      dispatch(addtoCart(product))
    }

   const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`w-4 h-4 ${
        index < Math.floor(rating)
          ? "fill-yellow-400 text-yellow-400"
          : "text-gray-300"
      }`}
    />
  ));
};


  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">

      {/* Image + Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
        />

        {/* Hover Overlay Badge */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-1">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center mb-4 space-x-2">
          <div className="flex items-center">{renderStars(product.rating)}</div>
          <span>{product.rating} ({product.reviews} reviews)</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed()}
          </span>

          <button className="group/btn bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2 cursor-pointer" onClick={handleCart}>
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>
      </div>

    </div>
  );
}
