import './App.css';
import AboutUs from './Page/AboutUs/AboutUs';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import Last from './Page/Last/Last';
import Order from './Page/Order/Order';

function App() {
  return (
    <div style={{overflow: "hidden",}}>
      <div className='flex justify-center items-center'>

      <Header/> 
      </div>

      <Home/>
      
      
      <Order/>

      <AboutUs/>
      <Last/>

    </div>
  );
}

export default App;
