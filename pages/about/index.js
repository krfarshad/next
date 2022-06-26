import { useRouter } from 'next/router'
function About(){
    const router = useRouter();

    const comeback = (e) =>{
        e.preventDefault();
        router.push('/')
    }
  return(
      <>
       <h1>About page</h1>
       <button onClick={comeback}>come back home page</button>
      </>
  )
}

export default About;