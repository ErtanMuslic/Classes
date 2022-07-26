import style from "./hero.module.css"
const Hero = (props) => {
    return <div className={style.container}>
        <div className={style.text}>
            <h1>Before they sold out readymade gluten</h1>
            <p>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <button style={{
                backgroundColor:"darkblue",
                width:"20%",
                height:"12%",
                border:"1px solid white",
                borderRadius:"4px",
                color:"white"}}>Button</button>
            <button style={{
                backgroundColor:"silver",
                width:"20%",
                height:"12%",
                border:"1px solid white",
                borderRadius:"4px",
                marginLeft:"10px"}}>Button</button>
        </div>
        <div className={style.image}>
            <img src="https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg" alt="" srcset="" />
        </div>
    </div>
}

export default Hero;