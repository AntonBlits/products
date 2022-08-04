import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
   product: IProduct
}

export function Product({ product }: ProductProps) {

   const [details, setDetails] = useState(false);

   const buttonBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
   const buttonClasses = ['py-2 px-4 border', buttonBgClassName];

   return (
      <div className="border py-2 px-4 rounded flex flex-col items-center mb-2"
      >
         <img alt={product.title} src={product.image} className="w-1/6" />
         <p>{product.title}</p>
         <p className="font-bold">{product.price}</p>
         <button
            onClick={() => setDetails(prev => !prev)}
            className={buttonClasses.join(' ')}
         >
            {details ? 'Hide Delails!' : 'Show Details!'}
         </button>

         {details && <div>
            <p>{product.description}</p>
            <p style={{ fontWeight: 'bold' }}>Rate: {product?.rating?.rate}</p>
         </div>}
      </div>
   )
}