import Image from "next/image";
import Link from "next/link";

function SingleContent({info}){

 return(
    <>
    <div className="container mx-auto flex flex-wrap">
       <div className="w-full md:w-1/2 p-4">
           <Image 
           src={info.thumbnail} 
           alt={info.title}
           width="600"
           height="450"
           />
       </div>
       <div className="w-full md:w-1/2 p-4">
           <h1>{info.title}</h1>
           <p className="my-8">{info.description}</p>
           <span className="text-sucess">${info.price}</span>
           <div>
              <button className="px-8 py-2 bg-fuchsia-500 text-white">
                 <Link href="/products">Shop</Link>
              </button>
           </div>
       </div>
    </div>
   </>
 )
}
export default SingleContent;