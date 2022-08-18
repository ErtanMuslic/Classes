import {Routes,Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Page404 from "./Page404";
import Product from "./Product";
import Team from "./Team";
import User from "./User";
import Users from "./Users";
const RouterPage = (props) =>{
    return <div>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/product/:productId" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Page404/>} />
    </Routes>
    </div>
}

export default RouterPage;