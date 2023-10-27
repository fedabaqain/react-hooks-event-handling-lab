// Code Keypad Component Here
import react,{useState} from "react"
function Keypad (){
    const [password, setPassword] = useState()
    function handleChange(event){
        console.log('Entering password...')

    }
    return (
        <div>
          <input type = "password" id="password" value ={password} onChange={handleChange}/>

        </div>
    )
}

export default Keypad;