import './Order.css' ;
import BurgerCard from './BurgerCard';
import { useEffect,useState } from 'react';



const AllData =  [
  { 
    id :1, 
    name : "Classic Beef Burger " , 
    description  :" Juicy grilled beef patty, cheddar cheese, lettuce, tomato, pickles, and house sauce on a toasted sesame bun.Contains: dairy, gluten." , 
    price :"12JD" , 
    image :"1.png"
  }, 
    { 
    id :2, 
    name : "Veggie Delight Burger" , 
    description  :`Grilled plant-based patty, avocado, caramelized onions, lettuce, tomato, and vegan garlic aioli in a whole wheat bun.100% meat-free.Contains: soy, gluten.`, 
    price :"12JD" , 
    image :"2.png"
  },
    { 
    id :3, 
    name : "Spicy Chicken Burger " , 
    description  :`Crispy fried chicken breast, spicy mayo, jalapeños, lettuce, and red cabbage slaw in a soft brioche bun.` , 
    price :"12JD" ,
    image :"3.png"
  }

]




export default function Order() {

 const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
  
    setStartAnimation(true);
  }, []);


  return (
    <div style={{
      backgroundImage: `url(${require("../../images/orange.jpg")})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      // backgroundAttachment: "fixed"
      position: "relative",
    }} className='min-h-screen flex justify-center items-center flex-col min-w-screen'>
      
  <div>  
    <img
      src={require("../../images/Left.png")}
      style={{
        position: "absolute",
        top: "-170px",
        left :startAnimation ?"-400px"  :  "-600px", 
        width: "630px",
        height: "410px",
        transition: "3s",
        zIndex: 1,
      }}
      className='LeftImage'
    />
      </div>


      <h1 style={{textShadow:"1px 1px 40px white "}} className='text-5xl font-bold mb-20'>Most Bobular</h1>
      
      <div className='flex justify-center items-center gap-5 '>

      {AllData.map((e)=>{
        return (
          <BurgerCard props={e} /> 
        )
      })}

      </div>



    </div>
  )
}
