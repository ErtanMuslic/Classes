import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Memorize = (porps) => {

    const [text,setText] = useState(0);
    const arrayObj = [{id:"1"} ,{id:"2"} ,{id:"3"}]
    const myCallback=useCallback((e) =>{
        setText(e.target.value);
        console.log(e.target.value);
},[setText])
    useEffect(() => {
        console.log("Here");
    })
    const filteredArray = useMemo(()=>{
        return arrayObj.filter((item)=>item.id.includes(text))
    })

    return <div>
        <p>{text}</p>
        {/* <Myinput onChange={myCallback}/>
        <Myinput onChange={myCallback}/>
        <Myinput onChange={myCallback}/> */}
        {arrayObj.map((item) =>{
            return <p key ={item.id}>{item.id}</p>
        })}
    </div>
};

const Myinput=(props)=> {
    return <div>
        <label htmlFor="My Input">
    <input  type="text"  onChange={props.onChange}/>
    </label>
    </div>
}
export default Memorize;