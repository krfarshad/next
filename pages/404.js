import { useRouter } from "next/router";

function NotFound(){
    const router = useRouter();
    const combackHome = (e) =>{
        router.push('/')
    }
    return(
        <>
              <h1>We couldn't find anything</h1>
              <button onClick={combackHome}>Come back home</button>
        </>
    )
  }
  
  export default NotFound;