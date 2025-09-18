import React from 'react'
import BusinessCard from './BusinessCard'

function App() {
  return (
    <>
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
    </>
  )
}
 
export default App