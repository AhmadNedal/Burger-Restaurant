import React, { use } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="Bg w-screen h-screen flex justify-center  flex-col">

      <div className="flex mr-96 justify-center items-center flex-col" style={{color: "white" }}>
      
        <h1 className="mb-5 bg-orange-500 p-2 font-bold text-4xl">GrillCraft Burgers</h1>
        <p className="text-center" style={{width:"500px"}}>
          GrillCraft Burgers brings you bold flavors and handcrafted quality in every bite. Fresh ingredients, juicy patties, and burgers grilled to perfection.
        </p>
        
        <button 
        onClick={()=>{
          navigate("/Shop");
        }}
        className="mt-5 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
          Order Now
        </button>

      </div>
      
    </div>
  );
}
