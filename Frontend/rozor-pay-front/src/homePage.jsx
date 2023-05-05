import React from 'react'
import './homePage.css'
import BoxSm from './components/box_01_sm'
import Acc from './components/acc'
import LogoCompo from './components/logo_copm'
import Nav from './components/nav'
import Navbar from './components/navbar'
import LineGraph from './components/line_chart'
import IconBox from './components/icon_box'
import { GoReport} from 'react-icons/go'
import {MdReportGmailerrorred} from 'react-icons/md'
import Boxlast from './components/bx_last_4.jsx'
import BoxFive from './components/bx_05'

const HomePage = () => {
  return (
    <>
    <div className="containerx">
        <div className='sidebar'>
           <LogoCompo />
            
            <div className='acc'>
            <Acc title={"fashion"}/>

            </div>
            <div className='acc'>
            <Acc title={"services"} />
              
              </div>
              <div className='acc'>
              <Acc title={"funiture"} />
              
              </div>

        </div>

        <div className='page-body'>
        
            <div className='nav'>
              <Navbar />
              
            </div>
            <div className='dash'>
              <div className='dash-title'>
                <h2>Dashboard</h2>
                <p>Good afternoon Dev</p>

              </div>
              <div className='dash-right'>
                <span>
               
                <GoReport />
                  Report

                </span>
                <span>
                <MdReportGmailerrorred className='fs-5'/>
                  Export

                </span>

              </div>
            </div>

            <div className='box1'>

            <div className='box-sm bobx-shadow'>
              <BoxSm title={"Dev says"} text={"900"} color={"#146C94"} />
                
                    
             </div>
             <div className='box-sm bobx-shadow'>
              <BoxSm title={"Dev says"} text={"900"} color={"#FFD93D"} />
                
                    
             </div>
             <div className='box-sm bobx-shadow'>
              <BoxSm title={"Statistics"} text={"1000"} color={"#6DA9E4"} />
                
             </div>
             <div className='box-sm bobx-shadow'>
              <BoxSm title={"Statistics"} text={"1000"} color={"#B71375"} />
                
             </div>

             <div className='box-sm bobx-shadow'>
              <BoxSm title={"Statistics"} text={"1000"} color={"#8B1874"} />
                
             </div>
           </div>
            
           <div className='box2'>
            <div className='line-chart'>
            <LineGraph  />
            </div>
            <div className='icn-bx'>
              <IconBox />
            </div>
            
          
        
          
            </div>

             <div className='box3'>
               <div className='box-lg'>
                 <Nav />

              </div>
              <div className='box-lg'>
                 <Nav />

              </div>
             
             
            </div>


            <div className='box4'>
               <div className='box-md'>
                <BoxFive />
                 

              </div>
              <div className='box-md'>
              <BoxFive />
                

              </div>
              <div className='box-md'>
              <Boxlast />
                

              </div>
             
             
            </div>

        </div>

        </div>
        </>
    
  )
}

export default HomePage