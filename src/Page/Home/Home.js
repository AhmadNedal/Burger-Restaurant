import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Bg w-screen h-screen flex justify-center  flex-col">

      <div className="flex mr-72 justify-center items-center flex-col" style={{color: "white" }}>
      
        <h1 className="mb-5 bg-orange-500 p-2 font-bold text-4xl">GrillCraft Burgers</h1>
        <p className="text-center" style={{width:"500px"}}>
          GrillCraft Burgers brings you bold flavors and handcrafted quality in every bite. Fresh ingredients, juicy patties, and burgers grilled to perfection.
        </p>
        
        <button className="mt-5 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
          Order Now
        </button>

      </div>
      
    </div>
  );
}
