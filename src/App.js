import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AboutUs from './Page/AboutUs/AboutUs';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import Last from './Page/Last/Last';
import Order from './Page/Order/Order';
import Shop from './Page/Shop/Shop';
import { useEffect } from 'react';





let HomeShow = () => {
  const location = useLocation();

  useEffect(()=>{
    if(location.hash) {
      const id=location.hash.substring(1); 
      const element=document.getElementById(id);
      if(element)
        element.scrollIntoView({behavior:'smooth'});
    
    }
  },[location]);

  return (
    <div>
      <div id="Home"><Home /></div>
      <div id="AboutUs"><AboutUs /></div>
      <div id="MostBobular"><Order /></div>
      <div><Last /></div>
    </div>
  );
};
function App() {
  return (
   <Router>
    <div className='overflow-hidden' >
     <div className='flex justify-center items-center'><Header /></div>

      <Routes>
        <Route path="/" element={<HomeShow />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
      
    </div>
  </Router>
  );
}

export default App;
