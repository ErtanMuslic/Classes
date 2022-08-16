import {Routes,Route} from "react-router-dom";
const RouterPage = () =>{
    return <div>
        <Routes>
      <Route path="/" element={<p>Home</p>}/>
      <Route path="/team" element={<p>Team</p>}/>
      <Route path="/contacts" element={<p>Contact</p>}/>
      <Route path="/about" element={<p>About</p>}/>
    </Routes>
    </div>
}

export default RouterPage;