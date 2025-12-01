import ProductCard from "./ProductCard"
import { products } from "../products"



export default function ProductGrid(){
 

    return (
        <>
        <div className="py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
           <h2 className="text-4xl font-black text-gray-900 mb-4">
            Features Products
            </h2>
            <p className="text-lg text-gray-600">
                Discover our exclusive range of products designed to enhance your lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product)=>{
              return <ProductCard key={product.id} product={product}/>
            })}
          </div>
         </div>
        </div>
        </>
    )
}