import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

const About =() =>{
    const navigaton = useNavigate();
    const redirectHome =() =>{
        navigaton('/',{state:{name:"ertan"}})
    }
    return <Layout>
        <p>About</p>
        <button onClick={redirectHome}>Do something then go home</button>
    </Layout>
}
export default About;