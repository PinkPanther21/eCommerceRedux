import Header from "./components/Header"
import ProductGrid from "./components/ProductGrid"
import CartSidebar from "./components/CartSidebar"
import { useState } from "react"
import { Provider } from 'react-redux'
import { store } from "./store/store"

function App() {
  const [cartItems, setCartItems] = useState(false)
  
  const toggleCart = ()=>{
    setCartItems(!cartItems)
  }

  return (
    <>
      <Provider store={store}>
      <Header ontoggleCart={toggleCart}/>
      <ProductGrid />
      <CartSidebar isOpen={cartItems} onClose={()=> setCartItems(false)}/>
        </Provider>
    </>
  )
}

export default App
