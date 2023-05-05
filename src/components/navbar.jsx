import React from 'react'
import { BiMessageRoundedDots} from "react-icons/bi"
import { CgProfile} from "react-icons/cg"
import {AiOutlineDown } from "react-icons/ai"
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <form className="d-flex" role="search" style={{width: "70%", opacity: "0.8"}}>
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
    </form>

    <div className='right-nav'>
    <div className='position-relative'><BiMessageRoundedDots className='fs-5' /></div>
    <div className='d-flex gap-3 align-items-center dropdown'><CgProfile  className='fs-5'/></div>
    <div className='d-flex gap-3 align-items-center dropdown'><AiOutlineDown className='fs-20'/></div>
    </div>
    


       
    

   
    </>
  )
}







export default Navbar