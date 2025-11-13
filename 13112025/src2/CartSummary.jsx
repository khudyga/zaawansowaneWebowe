import {useContext} from 'react'
import {CartContext} from "./CartProvider"


const CartSummary = () => {
    const {cart} = useContext(CartContext)
    return <p>Liczba produktów w koszyku: {cart.length}</p>
}

export default CartSummary


