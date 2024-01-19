import { useNavigate } from "react-router-dom"

function Mainscreen(){
const navigate = useNavigate()






    return <div>
        <h1>
            main screen <br />

            <button onClick={()=>navigate('/Sellpage')}> sell item</button>
        </h1>
    </div>
}

export default Mainscreen