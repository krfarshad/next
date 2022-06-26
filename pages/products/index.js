import { useState } from "react";
import axios from 'axios';
import CardProduct from '../../components/products/card-product/CardProduct'
function Products({products}){
    return(
        <div className="container mx-auto flex flex-wrap">
              {/* {products ? products.map(item =>{
                return  (<CardProduct key={item.id} info={item}  />)
               })   :<p className='mx-auto my-8 font-bold '>loading</p>} */}
        </div>
    )
   
}
export async function getStaticProps(){
    
    await axios.get('https://dummyjson.com/products')
    .then(response=>{
        console.log(response)
    })



    return {
        props :{
            products :"products"
        }
    }
}
export default Products;