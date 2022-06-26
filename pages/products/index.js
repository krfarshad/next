import { useEffect, useState } from "react";
import axios from 'axios';
import CardProduct from '../../components/products/card-product/CardProduct'
function products(){
    const [products , useProducts] = useState();

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
            .then(response => useProducts(response.data.products))
    },[]);
        return(
        <div className="container mx-auto flex flex-wrap">
           {products ?  products.map(product =>{
            return  (<CardProduct key={product.id} info={product}  />)
           }) :<p className='mx-auto my-8 font-bold '>loading</p>}
        </div>
    )
}
export default products;