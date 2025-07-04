import React, { useEffect } from 'react'
import "./Header.css"; 


export default function Header() {

  onscroll=()=>{
    if(window.scrollY > 100) document.getElementById("bac").style.backgroundColor = "#d29e2fe0";
     else document.getElementById("bac").style.backgroundColor = "transparent";
  }


  
  return (
    <div style={{zIndex:"2"}} id='bac' className=' fixed  bac px-12 mt-4 mx-2 py-3 flex justify-between items-center top-0'>

        <h1 style={{color:"white"}}>
          GrillCraft Burgers
        </h1> 
        
        <ul className='flex justify-center items-center gap-5'>
          <li>
            <span className='Start'/>
            <a href='#'>Home</a>
            <span className='End'/>
          </li>
          <li>
            <span className='Start'/>
            <a href='#'>Shop</a>
            <span className='End'/>
          </li>

          <li>
            <span className='Start'/>
            <a href='#'>About Us</a>
            <span className='End'/>
            <span/>
          </li>
          
          <li >
            <span className='Start'/>
            <a href='#'>Contact Us</a>
            <span className='End'/>
          </li>
        </ul>
      
      </div>
  )
}
