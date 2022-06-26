import Image from 'next/image'
import Link from 'next/link';
function CardProduct({ info }) {
    const image = info.thumbnail
    return (


        <div className="card-item p-4 w-1/3">

            <div>
                <div>
                    <Link href={`products/${info.id}`} alt={info.title} >
                        <Image
                            src={image}
                            alt="Picture of the author"
                            width={320}
                            height={200}
                        />
                    </Link >
                </div>
                <div><h2>
                    <Link href={`product/${info.id}`} alt={info.title} >
                        {info.title}
                    </Link >
                </h2></div>
                <div>{info.price}</div>
            </div>

        </div >

    )
}
export default CardProduct;