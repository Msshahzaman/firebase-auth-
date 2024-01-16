import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../config/firebase"


function Login(){
    const navigate = useNavigate()

const [email, setEmail] = useState()
const [password, setPassword] = useState()



const signIn = () =>{
    login({email,password})

}



    return <div>

<h2>login</h2>

      email:  <input type="text" onChange={(e)=> setEmail(e.target.value)} />
      password:  <input type="password" onChange={(e)=> setPassword(e.target.value)} />

        <button onClick={signIn}>login</button>


 <p>dont have accpunt? 

    <span onClick={()=>navigate('/register')}> click here</span>
 </p>


   </div>
}
export default Login;