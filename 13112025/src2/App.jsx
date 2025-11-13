import { useState } from 'react'
import './App.css'
import CartProvider from './CartProvider'
import CartSummary from './CartSummary'
import ProductList from './ProductList'
import Cart from './Cart'


function App() {
 

  return (
    <>
      <CartProvider>
          <CartSummary/>
          <ProductList/>
          <Cart/>
      </CartProvider>
    </>
  )
}

export default App
