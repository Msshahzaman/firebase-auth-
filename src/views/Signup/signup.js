import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../../config/firebase"
import './signup.css'

function Register(){

    const navigate = useNavigate()
const [fname, setFname] = useState()
const [age, setAge] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()

const signup = async () =>{

try{
   await register({fname,age,email,password} ) 
    navigate('/login')
}
catch(error){
console.log(error)
}




   
}

    return <div className="main-div">

        <div className="card">

        <h2>register</h2>

fname : <input type="text" onChange={(e)=> setFname(e.target.value)} /> <br />
Age: <input type="text" onChange={(e)=> setAge(e.target.value)} /> <br />
email: <input type="text" onChange={(e)=> setEmail(e.target.value)}/> <br />
passwor : <input type="text" onChange={(e)=> setPassword(e.target.value)} />
<br />
<button onClick={signup} >register</button>

 <p> already acoount? <span onClick={()=>navigate('/login')}>Login here</span> 
 </p>




        </div>


    </div>
}
export default Register;