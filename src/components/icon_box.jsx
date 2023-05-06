import React from 'react'
import './icon_box.css'
import {BsAndroid2, BsApple} from 'react-icons/bs'
import {AiFillGold} from 'react-icons/ai'

function IconBox() {
  return (
    <>
        <div className='ic-bx'>
             <BsApple className=' ic-ap'/>
              <BsAndroid2 className='ic-ap'/>
             <h2>102</h2>

             </div>

        
        <h6>Install this Month</h6>

     

       
        <button className='btn'>See all customer</button>
        <h5>Currency v commodities</h5>
        <div>
        <AiFillGold className='ic-ap'/>&nbsp;&nbsp;
        <AiFillGold className='ic-ap'/>
        </div>
        <div>
          <p>100 clicks &nbsp;&nbsp;    50 clicks</p>
          
        
        </div>

       
      

    </>

    
  )
}

export default IconBox