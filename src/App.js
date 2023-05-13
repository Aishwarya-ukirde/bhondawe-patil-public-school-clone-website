
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Aboutus from './component/Aboutus';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Gallery from './component/Gallery';
import Achievement from './component/Achievement';
import Admission from './component/Admission';
import Academic from './component/Academic';
import Infrastructure from './component/Infrastructure';
import Contactus from './component/Contactus';


function App() {
  return (
    <>
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Aboutus' element={<Aboutus/>}/>
    <Route path='/Gallery' element={<Gallery/>}/>
    <Route path='/Achievement' element={<Achievement/>}></Route>
    <Route path='/Admission' element={<Admission/>}></Route>
    <Route path='/Academic' element={<Academic/>}></Route>
    <Route path='/Infrastructure' element={<Infrastructure/>}></Route>
    <Route path='/Contactus' element={<Contactus/>}></Route>
   </Routes>
   <Footer/>
    </BrowserRouter>
    
 
   

  
   
    
    </>
  );
}

export default App;
