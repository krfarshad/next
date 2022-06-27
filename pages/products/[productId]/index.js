import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect, useState } from "react";
import SingleProduct from '../../../components/products/single-page/SingleProduct';
function product() {
    const router = useRouter();
    const [product, useProduct] = useState();
    const proudctId = router.query.productId;
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${proudctId}`)
            .then(response => useProduct(response.data))
    }, [proudctId]);
    return (
        <>
        {product ?  <SingleProduct info={product} /> : <p className='mx-auto my-8 font-bold flex items-center justify-center'>loading</p> }
        </>
    )
}
export default product;