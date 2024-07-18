import React, { useEffect, useState } from "react";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    setCartTotal(
      cart.reduce[
          (total, currItem) => total + currItem.price + currItem.quantity, 
          0
        ]
    );
  }, [cart]);

console.log(cart);

const handleRemoveItem = (item) => {
console.log(item);
const newCart = cart.filter((product) => product.id !== item.id);
console.log(newCart);
setCart(newCart);
localStorage.setItem("cart", JSON.stringify(newCart));
};

  return ( 
    <div> 
      {cart.map((item) => {
        <div key={item?.id} className="cart-item-row">
          <img src={item?.image} alt={item?.title}/>
          <p>{item?.title}</p>
          <p>Price:&nbsp;${item?.price.toFixed(2)}</p>
          <p>Qty:&nbsp;{item?.quantity}</p>
          <p>Total:&nbsp;${(item?.quantity * item?.price).toFixed(2)}</p>
          <button onClick={() => handleRemoveItem(item)}>Remove item</button>
        </div>
     })}
     <p className="cart-total">Cart Total:&nbsp;${cartTotal.toFixed(2)}</p>
    </div>
  );
}
