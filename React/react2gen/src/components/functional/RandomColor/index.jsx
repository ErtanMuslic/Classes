import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const RandomColor = () =>{
    const [red,setRed]= useState(0); 
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);
    const [size,setSize] = useState(100);

    function getColor(){
        setRed(Math.floor(Math.random()*256));
        setGreen(Math.floor(Math.random()*256));
        setBlue(Math.floor(Math.random()*256));
        setSize(Math.floor(Math.random()*500));
    }

    // function getSize() {
    //     setSize(Math.floor(Math.random()*500));
    // }

    useEffect(() =>{
        setInterval(getColor,100);
    },[])
    // sa [] se poziva samo jednom a bez vise puta


    return <div>
        <button onClick={getColor}>Color</button>
         {/* <button onClick={getColor}>Change Color</button>
            <button onClick={getSize}>Change Size</button> */}
            <div style={{backgroundColor:`rgb(${red},${green},${blue})`,
        width: size,
        height: size
        }}></div>
        </div>
};

export default RandomColor;


