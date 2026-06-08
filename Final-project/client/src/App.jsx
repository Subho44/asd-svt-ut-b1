import About from "./components/About";
import Contact from "./components/Contact";
import Coursedetails from "./components/Coursedetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact  msg="hi all"/>}></Route>
        <Route path="/cd" element={<Coursedetails/>}></Route>
    </Routes>
    
    </BrowserRouter>

  
  </>

}
export default App;