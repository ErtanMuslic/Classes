import Footer from "../Footer";
import Nav from "../Nav";

const Layout = (props) =>{
    return <>
    <Nav/>
    {props.children}
    <Footer/>
    </>
};
export default Layout;