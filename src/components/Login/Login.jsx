import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"

export default function Login({token, setToken}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/auth/login", { username, password })
      .then((res) => {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          setToken(res.data.token);
          navigate("/");
        }
    })
    .catch((err) => {
      setLoginError(true);
    }); 
 };
 if (token) {
   navigate("/");
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        {loginError && (
            <p style={{ color: "red", marginBottom: "10px" }}>
                Wrong credentials. Please try again.
            </p>
        )}
        <input 
          type="text" 
          placeholder="Username" 
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => {
            setPassword(e.target.value);
          }} 
        />
        <button>Submit</button> 
      </form>
    </div>
  );
}
