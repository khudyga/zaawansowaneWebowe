import React, { useState, useRef } from 'react';

const LoginForm = () => {
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    const handleLogin = () => {
        if (!userNameRef.current.value) {
          userNameRef.current.focus();
          return;
        }
        if (!passwordRef.current.value){
            passwordRef.current.focus()
            return
        }
        console.log("zalogowano pomyślnie")
    }

    return (
      <>
        <h1>Logowanie</h1>
        <div>
          <label>Nazwa użytkownika: </label>
          <input type="text" ref={userNameRef} />
        </div>
        <div>
          <label>Hasło: </label>
          <input type="password" ref={passwordRef} />
        </div>
        <button onClick={handleLogin}>Zaloguj się</button>
      </>
    );
}

export default LoginForm;