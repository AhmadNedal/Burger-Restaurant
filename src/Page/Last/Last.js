import React from 'react'
import './Last.css';

export default function Last() {
  return(

    <div className='min-h-screen bglast flex justify-start pt-24 items-center  flex-col min-w-screen'>
        <h1 className='text-center text-3xl font-bold mb-8 '> 
          Order Now and Enjoy the Best Burgers in Town!
        </h1>
        
        <button className='bg-orange-500 text-white px-10 py-4 rounded-lg hover:bg-orange-600 transition duration-300'>
          Order Now
        </button>


    </div>  
  )
}
