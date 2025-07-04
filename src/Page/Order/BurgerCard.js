import React, { useRef } from 'react'
import './Order.css'; 


const positions = [
  { top: 0, left: 0 },
  { bottom: 0, right: 0 },
  { top: 0, right: 0 },
  { bottom: 0, left: 0 }
];


export default function BurgerCard({props}) {
  const refHeadText = useRef(null) ; 
  const refPrice = useRef(null);
  
  return ( 
    <div
    style={{paddingBottom:"20px",boxShadow: "0 12px 22px rgba(0,0,0,0.20)" }}
      onMouseLeave={()=> {          
          const CicleArray = document.getElementsByClassName(`Circle${props.id}`); 
          for(let i=0;i<CicleArray.length ; ++i)CicleArray[i].style.width = "0px";
      }}
        onMouseEnter={()=>{
          const CicleArray = document.getElementsByClassName(`Circle${props.id}`); 
          for(let i=0;i<CicleArray.length ; ++i)CicleArray[i].style.width = "6px";
      }}
    className='w-60 Hoverr  relative cursor-pointer rounded-xl flex flex-col justify-center items-center h-72'
    >
      
      {positions.map((pos, index) => (
        <span
          key={index}
          style={{ transition: ".2s" }}
          className={`w-0 h-1.5 Circle${props.id} absolute m-3 bg-red-300 rounded-full ${pos.top===0?'top-0':''} ${pos.bottom===0?'bottom-0':''} ${pos.left===0?'left-0':''} ${pos.right===0?'right-0':''}` }
        />
      ))}
      


      <img
        className='ImageCard'
        src={require(`../../images/${props.image}`)} alt="Burger"/> 

      <div className='flex flex-col justify-center items-center'>
        <h1 style={{color:"#333"}} ref={refHeadText} className=' font-bold HeadText text-xl'>  {props.name} </h1>
        <h2 style={{color:"#888" }} className='PriceCard' ref={refPrice}  >10JD</h2>
      </div>

      
        <p  style={{transition:".4s"}} className=' h-0 overflow-hidden Description  w-0 text-sm text-center'>{props.description}</p>
      
    </div>
  )
}
