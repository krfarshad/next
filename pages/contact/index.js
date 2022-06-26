import { useRouter } from 'next/router'
function Contact(){
    const router = useRouter();

    const comeback = (e) =>{
        e.preventDefault();
        router.push('/')
    }
  return(
      <>
       <h1>Contact page</h1>
       <button onClick={comeback}>come back home page</button>
      </>
  )
}

export default Contact;