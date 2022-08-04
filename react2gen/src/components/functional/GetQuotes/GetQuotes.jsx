import { useEffect } from "react";
import { useState } from "react";
import {api} from "../../../api/api.js";
import QuoteCard from "./QuoteCard..jsx";

const GetQuotes = () => {

    const [quotes,setQuotes] = useState([]);

    const fetchQuote = async () => {
        try{
            const result = await api.get(`/quotes`);
            const data = result.data;
            setQuotes(data.result);
        }   catch(error){
            console.log(error);
        };
    };

    useEffect(()=>{
        fetchQuote();
    },[]);

    return <div>
        {quotes.map((quote, index) =>{
            return <QuoteCard 
            author ={quote.author} 
            content = {quote.content}
            key={index} 
            />;
        })}
    </div>;
}

export default GetQuotes;

