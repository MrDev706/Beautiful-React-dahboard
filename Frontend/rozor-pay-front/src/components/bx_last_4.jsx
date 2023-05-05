import React from 'react'

const Boxlast= () => {
  return (
    <>
<div className=' col-4 border  border-primary rounded-4' style={{height:"35vh", width: "100%"}}>
                      <h6 style={{marginLeft: "8px"}} className='mt-2 me-2'>Upcoming Renewal Client</h6>
                      <div >
                        <div className='d-flex table-border justify-content-around'>
                          <p className='mb-0'> Nitin Singhal<br/><span className='bg-warning'>Gold</span></p>
                          <p > 16789</p>
                        </div>
                        <div className='d-flex table-border justify-content-around'>
                          <p className='mb-0'>Balraj<br/><span className='bg-secondary'>Platinum</span></p>
                          <p>16789</p>
                        </div>
                        <div className='d-flex table-border justify-content-around'>
                          <p className='mb-0'>Rghav<br/><span className='bg-warning'>Titanium</span></p>
                          <p >16789</p>
                        </div>
                        <p style={{marginLeft: "8px"}} className='mt-1 mb-1'>See All</p>
                      </div>
                    </div>

    </>
  )
}

export default Boxlast