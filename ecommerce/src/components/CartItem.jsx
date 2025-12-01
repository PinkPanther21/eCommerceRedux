import { Minus,Plus,Trash } from "lucide-react"
import { useDispatch } from "react-redux"
import { removeFromCart, updateQuantity } from "../store/cartSlice"

export default function CartItem({item}){

  const dispatch = useDispatch()
  const handleQtyChange = (newQty)=>{
    if(newQty <=0 ){
       dispatch(removeFromCart(item.id))
    }
   else{
    dispatch(updateQuantity({id: item.id, quantity: newQty}))
   }
  }
  const handleRemoveItem = ()=>{
    dispatch(removeFromCart(item.id))
  }
    return (
        <>
        <div className="flex items-center space-x-4 bg-gray-50 rounded-xl">
         <img src={item.image}  className="w-16 h-16 object-cover rounded-lg"/>
         <div className="flex-1 min-w-0">
           <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
           <p>{item.price}</p>
         </div>
         <div className="flex items-center space-x-2">
           <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
            <Minus  className="w-4 h-4" onClick={()=> handleQtyChange(item.quantity - 1)}/>
            </button> 
            <span className="w-8 text-center font-medium">{item.quantity}</span>
            <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
            <Plus  className="w-4 h-4" onClick={()=> handleQtyChange(item.quantity + 1)}/>
            </button>
         </div>
         <div className="flex items-center space-x-2">
          <span className="font-bold text-gray">${item.price * item.quantity}</span>
          <button className="p-1 text-red-500 rounded-full hover:bg-red-50 transition-colors duration-200 cursor-pointer" onClick={handleRemoveItem}><Trash className="w-4 h-4" /></button>
         </div>
        </div>
        </>
    )
}