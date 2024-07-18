import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({item, parent, token, cart, setCart}) {
  const addToCart = (item) => {
    let resultIndex = 0;
    let productQty = 0;
    // check if item is in cart...
    const result = cart.find((product, index)=>{
      resultIndex = index;
      return product.id === item.id;
    });
    if (result) {
      // ...if Yes, then update quantity by 1
      cart[resultIndex].quantity += 1;
      productQty = cart[resultIndex].quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart(cart)
    }else{
      // if NO, add the item to the cart and set quantity to 1

        item.quantity = 1;
        productQty = 1;
        const updatedCart =[...cart, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        setCart(updatedCart);
    }

    alert[
      "Added item! You have " + productQty + " " + item.title + " in your cart!"
    ];
  };

  return (
    <Link to={'/product/details/${item?.id}'} className="product-card">
      <h2>{item?.title}</h2>
      {parent === "details" ? (
        <img src={item?.image} alt={item?.title} height={"500px"} />
      ) : (
        <img src={item?.image} alt={item?.title} />
      )}
      <p>{item?.price.toFixed(2)}</p>
      {parent === "details" && <p>{item?.description}</p>}
      {parent === "details" && token && (
        <button onClick={()=>addToCart(item)}>Add to Cart </button>
        )}
      {parent === "details" && !token && (
        <link to="/login">Login to Add to Cart</link>
      )}
   </Link>
  );
}

    
