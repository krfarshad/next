import { useState } from "react";
import axios from 'axios';
import CardProduct from '../../components/products/card-product/CardProduct'
function Products({products}){

    return(
        <div className="container mx-auto flex flex-wrap">
              {products ? products.map(item =>{
                return  (<CardProduct key={item.id} info={item}  />)
               })   :<p className='mx-auto p-10 text-center '>loading</p>}
        </div>
    )
}
export async function getStaticProps(){
    

    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()

    return {
        props :{
            products :data.products
        }
    }
}
export default Products;