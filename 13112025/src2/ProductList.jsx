import { useContext } from 'react';
import { CartContext } from './CartProvider';

const ProductList = () => {
const {addToCart} = useContext(CartContext)
const products = ["Jajko", "Masło", "Chleb"]

return(
    <ul>
        {
            products.map((product, index)=>(
                <li key={index}>
                    {product} <button onClick={() => addToCart(product)}>Dodaj do koszyka</button>
                </li>
            ))
            
        }
    </ul>
)

}

export default ProductList
