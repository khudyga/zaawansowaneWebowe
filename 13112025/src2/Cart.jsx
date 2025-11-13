import {useContext} from 'react'
import { CartContext } from "./CartProvider";

const Cart = () => {
const {cart} = useContext(CartContext)

return (
  <>
    <p>Produkty w twoim koszyku:</p>
    <ul>{
        cart.map((product, index)=> (
            <li key={index}>
                {product}
            </li>
        ))    
    }</ul>
  </>
);
}

export default Cart