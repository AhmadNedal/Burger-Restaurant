import React, { useEffect } from 'react'
import Header from '../Header/Header'
import './Shop.css'; 
import BurgerCard from '../Order/BurgerCard';


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
  }, 
      { 
    id :4, 
    name : "Veggie Delight Burger" , 
    description  :`Grilled plant-based patty, avocado, caramelized onions, lettuce, tomato, and vegan garlic aioli in a whole wheat bun.100% meat-free.Contains: soy, gluten.`, 
    price :"12JD" , 
    image :"2.png"
  },
      { 
    id :5, 
    name : "Veggie Delight Burger" , 
    description  :`Grilled plant-based patty, avocado, caramelized onions, lettuce, tomato, and vegan garlic aioli in a whole wheat bun.100% meat-free.Contains: soy, gluten.`, 
    price :"12JD" , 
    image :"2.png"
  },
      { 
    id :6, 
    name : "Veggie Delight Burger" , 
    description  :`Grilled plant-based patty, avocado, caramelized onions, lettuce, tomato, and vegan garlic aioli in a whole wheat bun.100% meat-free.Contains: soy, gluten.`, 
    price :"12JD" , 
    image :"2.png"
  },
      { 
    id :7, 
    name : "Veggie Delight Burger" , 
    description  :`Grilled plant-based patty, avocado, caramelized onions, lettuce, tomato, and vegan garlic aioli in a whole wheat bun.100% meat-free.Contains: soy, gluten.`, 
    price :"12JD" , 
    image :"2.png"
  },
      { 
    id :8, 
    name : "Veggie Delight Burger" , 
    description  :`Grilled plant-based patty, avocado, caramelized onions, lettuce, tomato, and vegan garlic aioli in a whole wheat bun.100% meat-free.Contains: soy, gluten.`, 
    price :"12JD" , 
    image :"2.png"
  },
      { 
    id :9, 
    name : "Veggie Delight Burger" , 
    description  :`Grilled plant-based patty, avocado, caramelized onions, lettuce, tomato, and vegan garlic aioli in a whole wheat bun.100% meat-free.Contains: soy, gluten.`, 
    price :"12JD" , 
    image :"2.png"
  },
  { 
    id :10 ,  
    name : "Veggie Delight Burger" , 
    description  :`Grilled plant-based patty, avocado, caramelized onions, lettuce, tomato, and vegan garlic aioli in a whole wheat bun.100% meat-free.Contains: soy, gluten.`, 
    price :"12JD" , 
    image :"2.png"
  },
  { 
    id :11,  
    name : "Veggie Delight Burger" , 
    description  :`Grilled plant-based patty, avocado, caramelized onions, lettuce, tomato, and vegan garlic aioli in a whole wheat bun.100% meat-free.Contains: soy, gluten.`, 
    price :"12JD" , 
    image :"2.png"
  },
  { 
    id :12,  
    name : "Veggie Delight Burger" , 
    description  :`Grilled plant-based patty, avocado, caramelized onions, lettuce, tomato, and vegan garlic aioli in a whole wheat bun.100% meat-free.Contains: soy, gluten.`, 
    price :"12JD" , 
    image :"2.png"
  },


]



export default function Shop() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]) ; 

return (
  <div className='BgShop flex flex-col pt-40 items-center'>

    <h1 className='text-white mb-14 z-10 text-3xl font-bold'> Shop Now</h1> 

    <div className='flex flex-wrap justify-center items-center gap-10'>
      {AllData.map((e)=>(
        <BurgerCard key={e.id} props={e} />
      ))}
    </div>
</div>
  )
}
