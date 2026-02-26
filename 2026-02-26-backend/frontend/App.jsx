import React, { useState } from 'react';
import axios from 'axios'

function App(){
  const [messages, setMessages] = useState([])
  const API_URL = 'http://localhost:3001/messages'

  const fetchMessages = async () => {
    try{
      const response = await axios.get(API_URL)
      setMessages(response.data)

    }catch(err){
    console.log("Błąd: ", err)}
  }

  const sendMessage = async () =>{
    try{
      const response = await axios.post(API_URL, {name: "użytkownik", message:"Cześć z frontendu"})

      if (response.data.success){
        fetchMessages()
      }
    }catch(err){
      alert(err.response.data.error)
    }
  }

  return (
    <>
      <button onClick={sendMessage} >Wyślij wiadomość</button>
      <ul>
        {messages.map((m,i)=>
          <li key={i}>{m.name} : {m.message}</li>)}
      </ul>
    </>
  )
}

export default App
