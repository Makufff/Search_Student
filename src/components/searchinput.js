import React from 'react'
import { Input } from 'semantic-ui-react'
import './searchinput.css' 

function searchinput (props)  {
    const {value , onvalueChange} = props ;
    return (
        <div className="searchinput">
          <Input type = 'text' placeholder = "type here" value = {value} onChange = { (event) => {onvalueChange(event.target.value)}}/>
        </div>
    )
}

export default searchinput
