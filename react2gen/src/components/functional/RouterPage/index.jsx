import {Routes,Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Page404 from "./Page404";
import Team from "./Team";
const RouterPage = (props) =>{
    return <div>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Page404/>} />
    </Routes>
    </div>
}

export default RouterPage;