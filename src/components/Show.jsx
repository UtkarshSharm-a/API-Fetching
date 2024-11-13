import React, { useEffect } from 'react'
import axios from "axios";

import { useState } from 'react'
const Show = () => {
    const [products, setProduct] = useState([])

    const apiFetching=()=>{
      const api="https://fakestoreapi.com/products";
      axios.get(api).then((products)=>{
        console.log(products);
        setProduct(products.data);
  
      }).catch((err)=>console.log(err));
    }

    useEffect(()=>{
        apiFetching()
    },[])
  
  return (
    <>   
   
      <div>
          <ul className="p-10">
      {products.length > 0 ? products.map(p=><li key={p.id} className="px-5 py-2 mb-3 bg-red-300 w-1/2">{p.title}</li>
):<h1>Loading....</h1>}
    </ul>
    </div>
</>

  )
}

export default Show
