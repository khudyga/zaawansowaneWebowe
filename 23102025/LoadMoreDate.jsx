import React, { useState, useEffect } from 'react';



const LoadMoreDate = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(
          `https://dummyjson.com/products?limit=20&skip=${count*20}`)
          .then(res => res.json())
          .then(data => {
            setProducts(prevData => [...prevData, ...data.products])
            setLoading(false)
          })
          .catch(err => {
            console.log('Error fetching data: ', error);
            setLoading(false)
          })
    }, [count])

    useEffect(() => {
        if (products.length===100) setDisableButton(true)
    }, [products])

    if (loading){
       return <div><p>Loading data! Please wait.</p></div>
    }

    return (
      <div className="load-more-container">
        <div className="product-container">
          {products.map((item) => (
            <div className="product">
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <button onClick={()=>{
            setCount(count+1)

        }} disabled={disableButton}>Load more products</button>
        {disableButton && <p>You have reached 100 products</p>}
      </div>
    );

}

export default LoadMoreDate