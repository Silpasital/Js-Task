import React,{useState} from 'react'
import Senior from './Senior'
import Student from './Student'

function Teacher(props) {
    const [greet, setGreet] = useState("")
    const [solve, setSolve] = useState("")
  let project="finance project"

    return (
        <div style={{backgroundColor:"pink",width:"400px", height:"400px"}}>
            <h2>This is Teacher</h2>
             <input name="greet" onChange={e => setGreet(e.target.value)} />
      
            {
                greet
            }
            <Student greet={greet}></Student>
            {/* <Student project={project} setGreet={setGreet} setSolve={setSolve}></Student> */}
            {/* <Senior solve={solve}></Senior> */}
        </div>
    )
}

export default Teacher


