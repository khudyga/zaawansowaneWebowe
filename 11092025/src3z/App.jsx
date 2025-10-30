import React, { useState } from 'react';
import LoadMoreDate from './LoadMoreDate';
import "./assets/style.css";
import LoginForm from './LoginForm';


function App(){
  const [count, setCount] = useState(0)

  return(
    <>
    <LoginForm/>
    </>
  )
}

export default App