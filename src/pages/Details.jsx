import React, {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details({item, token, cart, setCart}) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log(product)
    useEffect(()=> {
      axios(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => console.log(err));
   },  []);
   return ( 
     <div>
       <ProductCard 
         item={product}
         parent={"details"}
         token={token}
         cart={cart}
         setCart={setCart}
        />
     </div>
   );
}
