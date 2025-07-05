import React, { useEffect } from 'react'
import "./Header.css"; 
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate() ; 

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
            <a className='cursor-pointer' onClick={()=> {
                navigate("/#Home");
            }} >Home</a>
            <span className='End'/>
          </li>
          <li>
            <span className='Start'/>
            <a
            className='cursor-pointer' onClick={()=> {
                navigate("/Shop");
            }}
            >Shop</a>
            <span className='End'/>
          </li>

          <li>
            <span className='Start'/>
            <a className='cursor-pointer' onClick={()=> {
                navigate("/#AboutUs");
            }}
            >About Us</a>
            <span className='End'/>
            <span/>
          </li>
          
          <li >
            <span className='Start'/>
            <a 
            className='cursor-pointer' onClick={()=> {
                navigate("/#MostBobular");
            }}
            >Most Bobular</a>
            <span className='End'/>
          </li>
        </ul>
      
      </div>
  )
}
