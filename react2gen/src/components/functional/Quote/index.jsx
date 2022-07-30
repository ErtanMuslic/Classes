import { useState } from "react";
import { useEffect } from "react";
import api from "../../../api/api.js";

const Quote = () => {
    const [quote,setQuote] = useState({});
    const [counter,setCounter] = useState(0);
    const [tag,setTag] = useState("famous-quotes")
    // useEffect(() => {
        // api.get('/random').then((result) =>{
        //     console.log(result);
        //     const data = result.data;
        //     setQuote(data);
        // });
    // },[])

        const fetchQuote = async () => {
            try{
                const result = await api.get(`/random?tags=${tag}`);
                const data = result.data;
                setQuote(data);
            }   catch(error){
                console.log(error);
            };
        };

    useEffect(()=>{
        fetchQuote();
    },[tag]);

    return <div>
        <select name="" id="" value={tag} onChange={(e) => {setTag(e.target.value)
        }}>
            <option value="technology">Technology</option>
            <option value="famous-quotes">Famous Quotes</option>
            <option value="history">History</option>
            <option value="civil-rights">Civil Rights</option>
        </select>
        {/* <button onClick={() => setCounter(counter + 1)}>Fetch New Quote:{counter}</button> */}
        <div style={{border:"2px solid black",marginTop:"10px",marginBottom:"10px"}}>
        <p>{quote && quote.content}</p>
        <p style={{textAlign:"center"}}>By: {quote && quote.author} </p>
        </div>
        </div>
}

export default Quote;