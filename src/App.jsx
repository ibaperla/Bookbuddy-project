import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import {Routes, Route} from "react-router-dom";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []); 

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);
  return (
    <>
      <Header
        products={products} 
        setProducts={setProducts}
        setProductsToDisplay={setProductsToDisplay}
        token={token}
        setToken={setToken}
      />
      <Routes>
        <Route 
          path="/"
          element={
            <Home 
              setProducts={setProducts} 
              products={products} 
              productsToDisplay={productsToDisplay}
              setProductsToDisplay={setProductsToDisplay}
            />
          }
        />
        <Route 
         path="/product/details/:id"
         element={<Details token={token} cart={cart} setCart={setCart} />}
        />
        <Route 
          path="/login" 
          element={<Login setToken={setToken} token={token} />} 
        />
        <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Route>

        <Route 
          path="*" 
          element={
            <Home 
              setProducts={setProducts} 
              products={products} 
              productsToDisplay={productsToDisplay}
              setProductsToDisplay={setProductsToDisplay}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
