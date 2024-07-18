import React from "react";
import { useLocation, Link } from "react-router-dom";

import "./Header.css";

export default function Header({ 
  products, 
  setProducts, 
  setProductsToDisplay,
  token,
  setToken 
}) {
  const location = useLocation();

  const handleSearch = (e) => {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductsToDisplay(filtered);  
 }
 
 const logout = () => {
    // clear the token from localStorage
    console.log("logging out");
    localStorage.removeItem("token");
    setToken(null);
 };

 return (
   <header className="header-cont">
     <Link to="/" className="logo">
       BOOKBUDDY
     </Link>

    {location.pathname === "/" ? (
     <input 
       type="text" 
       placeholder="Search for items..."
       onChange={handleSearch}
     />
    ) : (
        <Link to="/" className="login">
          Search for Items
        </Link>
    )}
     <div className="button-cont">
       {!token && (
       <Link to="/login" className="login">
         Login
       </Link>
       )}
       {token && <button onClick={logout}>Logout</button>}
       {token && (
        <Link to="/cart" className="login">
          Cart
       </Link>
       )} 
     </div>
    </header>
  );
}

































































