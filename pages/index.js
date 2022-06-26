import Link from 'next/link'
function Home(){
  return(
      <>
       <h1 className='font-bold text-2xl text-center my-4'>Welcome</h1>
       
       <nav>
          <ul className='mx-auto  flex justify-center'>
              <li className='mx-4 inline-block'>
                    <Link href="/about" >About</Link>
              </li>
              <li className='mx-4 inline-block'>
                    <Link href="/contact" >Contact</Link>
              </li>
              <li className='mx-4 inline-block'>
                    <Link href="/products" >products</Link>
              </li>
          </ul>
       </nav>
      </>
  )
}

export default Home;