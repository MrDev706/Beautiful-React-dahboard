import React from 'react'
import './bx05.css'
import {FaUserTie} from 'react-icons/fa'
const BoxFive = () => {
  return (
    <>
   <div className=' col-4 border gap-2  border-primary rounded-4' style={{height:"35vh", width: "100%"}}>
                      <div className=' mt-4 money'>
                        <h1 className='d-flex '>₹</h1>
                        <div className=''>
                          <h3 className='mb-0'>16,58,000</h3>
                          <p>Last month sales</p>
                        </div>
                      </div>
                      <div className='row d-flex align-items-center h-50'>
                          <div className='col-6  '>
                            <span className='m-icon'><FaUserTie /></span>
                          </div>
                          <div className='col-6   '>
                            <div className='d-flex justify-content-around'>
                              <p>Gold</p>
                              <p className='bg-warning border rounded-2'><span>14</span></p>
                            </div>
                            <div className='d-flex justify-content-around'>
                              <p>Platinum</p>
                              <p><span className='bg-secondary border rounded-2'>15</span></p>
                            </div>
                            <div className='d-flex justify-content-around mb-2'>
                              <p>Titanium</p>
                              <p><span className='bg-warning border rounded-2'>12</span></p>
                            </div>
                          </div>
                        </div> 
                    </div>
    </>
  )
}

export default BoxFive