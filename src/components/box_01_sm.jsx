import React from 'react'
import './box_01.css'
import {HiUser} from 'react-icons/hi'


const BoxSm= ({color, title, text}) => {
  return (
    <>
    <div className='box-container' style={{backgroundColor: color}}>
        <h4>{title}</h4>
        <h6>{text}</h6>
        <div className="ico"><HiUser className=' user-ic fs-20'/></div>

    </div>
    </>
  )
}

export default BoxSm