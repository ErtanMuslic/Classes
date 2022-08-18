import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout";

const User = () =>{
    const location = useLocation();

    const navigation = useNavigate();

    useEffect(()=>{
        const redirectToUsers=()=>{
            navigation('/users');
        }
        if(location.state===null){
            redirectToUsers();
        }
    },[location.state,navigation]);
    return(      
        <Layout>
            <div>
                <p>{location.state.id}</p>
                <p>{location.state.name}</p>
                <p>{location.state.job}</p>
            </div>
        </Layout>
    );
}

export default User;