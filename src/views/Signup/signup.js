import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../../config/firebase"

function Register(){

    const navigate = useNavigate()
const [fname, setFname] = useState()
const [age, setAge] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()

const signup = () =>{
   register({fname,age,email,password} ) 
}

    return <div>
        <h2>register</h2>

fname : <input type="text" onChange={(e)=> setFname(e.target.value)} />
Age: <input type="text" onChange={(e)=> setAge(e.target.value)} />
email: <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
passwor : <input type="text" onChange={(e)=> setPassword(e.target.value)} />

<button onClick={signup} >register</button>

 <p> already acoount? <span onClick={()=>navigate('/login')}>Login here</span> 
 </p>

    </div>
}
export default Register;