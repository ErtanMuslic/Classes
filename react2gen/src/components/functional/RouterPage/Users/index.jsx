import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import User from "../User";

const Users=() =>{

    const arrayUsers = [
    {id:1,name:"Ertan Muslic",job:"Developer"},
    {id:2,name:"Ertan Muslic1",job:"Developer1"},
    {id:3,name:"Ertan Muslic2",job:"Developer2"},
    {id:4,name:"Ertan Muslic3",job:"Developer3"}]

    const navigation = useNavigate();

    const navigateToUser= (user) =>{
        navigation('/user',{state:user});
    }
    return (
        <Layout>
            {/* {location.state &&  */}
        <div style={{display:"flex",flexWrap:"wrap",gap:"20"}}>
            {arrayUsers.map((item)=>{
                return <div key={item.id} style={{width:"300",height:"200",border:"1px solid black"}}>
                    <p>Name: {item.name}</p>
                    <p>Job: {item.job}</p>
                    <button onClick={()=>navigateToUser(item)}>See More</button>
                </div>
            })}       
        </div>
        </Layout>
    )
}

export default Users;