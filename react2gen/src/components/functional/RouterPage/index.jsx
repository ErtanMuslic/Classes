import {Routes,Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Invoices from "./Invoices";
import Invoice from "./Invoices/Invoice";
import SentInvoices from "./Invoices/SentInvoices";
import Page404 from "./Page404";
import Product from "./Product";
import Settings from "./Settings";
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
      
      <Route path="/settings" element={<Settings/>}>
      <Route index element={<p>nesto</p>}/>
      <Route path="general" element={<p>general</p>}/>
      <Route path="user" element={<p>user</p>}/>
      <Route path="messages" element={<p>messages</p>}/>
      </Route>

      <Route path="/invoices" element={<Invoices/>}>
        <Route index element={<InvoiceList/>}/>
        <Route path=":invoiceId" element={<Invoice/>}/>
        <Route path="sent" element={<SentInvoices/>}/>
      </Route>

      <Route path="*" element={<Page404/>} />
    </Routes>
    </div>
}

export default RouterPage;