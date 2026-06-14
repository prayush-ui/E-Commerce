import { LeftCircleOutlined } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Goback = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate(-1);
    }
  return (
<div>
<LeftCircleOutlined  onClick={handleClick}/>

</div>
  )
}

export default Goback
