import React from 'react'
import { Input } from 'semantic-ui-react'
import './searchinput.css' 

function searchinput (props)  {
    const {value , onvalueChange} = props ;
    return (
        <div className="searchinput">
          <Input type = 'text' placeholder = "กรุณาค้นหาด้วย : 	เลขประจำตัวสอบ , เลขประจำตัวประชาชน	 , ชื่อ , นามสกุล" value = {value} onChange = { (event) => {onvalueChange(event.target.value)}}/>
        </div>
    )
}

export default searchinput
