import Layout from "../Layout";
import style from "./Contact.module.css";

const Contact =() =>{
    return <Layout>
        <h1 style={{textAlign:"center",marginBottom:"0px"}}>Contact Us</h1>
        <div className={style.ContactContainer}>
            <div className={style.ContactTextArea}>
                <textarea cols="30" rows="10">Message us....</textarea>
            </div>
            <div className={style.ContactInput}>
                <label  htmlFor="">Name:</label>
                <input className={style.ContactLabel} type="text" />
                <label  htmlFor="">Email:</label>
                <input  className={style.ContactLabel} type="email" />
                <button className={style.Contactbutton}>Submit</button>
            </div>
        </div>
    </Layout>
}
export default Contact;