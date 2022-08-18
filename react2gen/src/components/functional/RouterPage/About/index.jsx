import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import style from "./About.module.css";

const About =() =>{
    // const navigaton = useNavigate();
    // const redirectHome =() =>{
    //     navigaton('/',{state:{name:"ertan"}})
    // }
    return <Layout>
        <div className={style.About}>
            <div style={{textAlign:"center"}}>
                <img src="https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg"
                 alt=""
                 width="50px"
                 height="50px" />
                <p>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <h4 style={{marginBottom:"0px",marginTop:"15%"}}>HOLDEN CAULFIELD</h4>
                <p>Senior Product Designer</p>
            </div>
            <div style={{textAlign:"center"}}>
            <img src="https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg"
                 alt=""
                 width="50px"
                 height="50px" />
                 <p>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                 <h4 style={{marginBottom:"0px",marginTop:"15%"}}>ALPER KAMU</h4>
                <p>UI Develeoper</p>
            </div>
            <div style={{textAlign:"center"}}>
            <img src="https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg"
                 alt=""
                 width="50px"
                 height="50px"
                 />
                 <p>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                 <h4 style={{marginBottom:"0px",marginTop:"15%"}}>HENRY LETHAM</h4>
                <p>CTO</p>
            </div>
            
        </div>
        {/* <button onClick={redirectHome}>Do something then go home</button> */}
    </Layout>
}
export default About;