import style from "./footer.module.css"

const Footer = (props) =>{
    return <div className={style.container}>
            <img src="" alt="" />
            <p style={{
                paddingRight:"10px",
                marginLeft:"5%"
            }}>Tailblocks</p>
            <p style={{
                borderLeft:"2px solid silver",
                paddingLeft:"10px",
                color:"silver"}}>Tailblocks —@knyttneve</p>
            
    </div>
}
export default Footer;