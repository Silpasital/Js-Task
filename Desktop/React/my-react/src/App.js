import logo from "./logo.svg";
import "./App.css";
// import Parent from './Parent';

import Teacher from "./Teacher";
import Contextp from "./useContext/Contextp";
import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Home from "./Adobe/Home";
import About from "./Adobe/About";
import Contact from "./Adobe/Contact";
import Contextc from "./useContext/Contextc";
import Contextc3 from "./useContext/Contextc3";

function App() {
  return (
    <>
      {/* <Teacher></Teacher>  */}
       {/* <Contextp></Contextp>  */}
   
     


      <Router>
      
        <div className="pnav-bar">
          <div className="left-nav">
        <img id="img" src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg"/>
        </div>
        <div className="nav-bar">
        <div>
          <Link to="/Creativity-desgin">Creativity & desgin</Link>
        </div>
        <div>
          <Link to="/Pdf-signatures">Pdf & E-signatures</Link>
        </div>
        <div>
          <Link to="/Marketing-Commerce">Marketing & Commerce</Link>
        </div>
        </div>
        </div>
        <hr />
        
        <Routes>
          <Route exact path="/Creativity-desgin" element={<Home/>}></Route>
          <Route exact path="/Pdf-signatures" element={<About/>}></Route>
          <Route exact path="/Marketing-Commerce" element={<Contact/>}></Route>
        </Routes> 
      </Router>

        <div className="menu">
          <div>
            <h1>Black Friday is on. Get 40% off.</h1>
          </div>
          <div>
        <img id="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDA7xblW59m0r8FcbfX5CBvUY_sI4YIj9Cg&usqp=CAU"/>
        </div>
          </div>
     


    </>
  );  
}

export default App;
