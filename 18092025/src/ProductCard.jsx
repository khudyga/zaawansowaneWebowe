const ProductCard = () => {
const {name, price, category, discount = 0, inStock= true} = product 
const finalPrice = price - (price*discount/100)
return(
    <div>
        <h4>{name}</h4>
        <p>Kategoria: {category}</p>
    </div>
)
}

export default ProductCard