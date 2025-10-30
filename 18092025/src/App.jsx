import 'bootstrap/dist/css/bootstrap.css'
import BusinessCard from './BusinessCard'
import React, { useState } from 'react';
import CustomButton from './CustomButton'
import ProductCard from './ProductCard';


function App() {
  const [buttonClicks, setButtonClicks] = useState(0)
  const products = [
    {name: "Laptop", price: 2999, discount: 10,  inStock: true},
    {name: "Telefon", price: 1299, discount: 0,  inStock: false},
    {name: "Tablet", price: 1999, discount: 15,  inStock: true},
  ]

  return (
    <>
    <h2>Cwiczenie 1:</h2>
      <div className='d-flex flex-wrap'>
    <BusinessCard
    name='Marian Nowak'
    job='Frontend Developer'
    email='marian@www.pl'
    phone='+48 123 456 789'
    />
     <BusinessCard
    name='Jan Kowalski'
    job='UX Designer'
    email='jan@www.pl'
    phone='+48 321 654 987'
    />
    </div>

    <h2>Cwiczenie 2:</h2>
      <div className='d-flex flex-wrap'>
        <CustomButton text="Maly niebieski" size="sm"  color="success" onClick= {() => setButtonClicks((c) => c + 1)}/>

        <CustomButton text="Sredni zielony"  color="success" onClick= {() => setButtonClicks((c) => c + 1)}/>

        <CustomButton text="Duzy czerwony" size="lg"  color="danger" onClick= {() => setButtonClicks((c) => c + 1)}/>

        <CustomButton onClick= {() => setButtonClicks((c) => c + 1)}/>

        <p className='mt-3'>Klikniec: {buttonClicks}</p>
      </div>

      <h2>Cwiczenie 3:</h2>
      <div className='d-flex flex-wrap card'>
        {products.map((products, index) => (
          <ProductCard key={index} products={product}/>
        ))} 
      </div>
    </>
    
  )
}
 
export default App;