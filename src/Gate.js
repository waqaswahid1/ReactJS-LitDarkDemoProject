import React, {useState} from 'react';
import './style.css'
 function Gate(){
  const [isOpen, setOpen] = useState(true);
  const gateState = isOpen ? 'Open the gate':'close the gate';
    return(

        <div className={`gate ${isOpen?"open":"closed"}` }>
            <p>The gate is {isOpen? 'opened':'closed'}</p>
            <p>Hello Toggle the button</p>
            <p><button onClick={()=>setOpen(!isOpen)}>{gateState}</button></p>
        </div>

    )
}
export default Gate;