import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function SingleProduct({info}){
    const [thumbnail , setThumbnail] =  useState(info.thumbnail);

    const changeImageSlide =  (e) =>{
     setThumbnail(e.target.src);
    }
    return(
        <>
         <div className="container mx-auto py-10 flex flex-wrap">
            <div className="w-full p-4 md:w-1/2">
                <figure className="text-center"><Image src={thumbnail} width="500px" height="600px" /></figure>
                <div className="gallery flex flex-wrap justify-center w-full">

            {info.images.map(image=>{
                return ( 
                <div key={image} className="p-3 rounded-md overflow-hidden inline-block cursor-pointer" ><Image src={image} width="70px" height="70px" onClick={changeImageSlide} /></div>
                )
            })}
            </div>
            </div>
            <div className="w-full p-4 md:w-1/2">
                <div className="text-right mt-4"><h1>{info.title}</h1></div>
                <div className="text-right mt-4"><p>{info.description}</p></div>
                <div className="price m-8"><span className="py-2 px-8 rounded-md shadow-emerald-200 shadow-sm bg-green-400 text-white">${info.price}</span></div>
                <div className="m-10 "><Link  href={'/products'}>Shop</Link></div>
              
            </div>
         </div>
        </>
    )
}
export default SingleProduct;