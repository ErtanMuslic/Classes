import {Link} from "react-router-dom"
import style from "./footer.module.css"

const Footer =() =>{
    return  <div className={style.footer}>
        <div className={style.footerLinks}>
        <Link className={style.footerText} to="/">Home</Link>
        <Link className={style.footerText} to="/team">Team</Link>
        <Link className={style.footerText} to="/contact">Contacts</Link>
        <Link className={style.footerText} to="/about">About</Link>
        </div>
        <p className={style.footerText}>Copyright  &copy;  2022</p>
    </div>
}
export default Footer;