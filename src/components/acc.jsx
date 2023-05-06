import React from 'react'
import { Accordion } from 'react-bootstrap';
import './acc.css'
import {HiUser} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
import {Link} from 'react-router-dom'
const style1 = {
    "display": "flex",
    "gap": "10px",
    "flex-direction": "column"
    


}


function Acc({title}) {
  return (
    <>
   
    <Accordion style={{border: "none"}}defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item style={{border: "none"}}eventKey="0">
        <Accordion.Header><FiSettings />&nbsp;&nbsp;{title}</Accordion.Header>
        <Accordion.Body style={{border: "none"}}>
            <div className='links' style={style1}>
          <Link to='#'>Home</Link>
          <Link to='#'>Contact</Link>
          <Link to='#'>Reels</Link>
          <Link to='#'>Services</Link>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item style={{border: "none"}} eventKey="1">
        <Accordion.Header><HiUser className='fs-20'/>&nbsp;&nbsp;{title}</Accordion.Header>
        <Accordion.Body style={{border: "none"}}>
        <div className='links' style={style1}>
        <Link to='#'>Home</Link>
          <Link to='#'>Contact</Link>
          <Link to='#'>Reels</Link>
          <Link to='#'>Services</Link>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  
    
    </>
  )
}

export default Acc