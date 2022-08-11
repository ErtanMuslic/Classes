import { useRef } from "react";

const Ref = () =>{

    const myRef = useRef("");

    console.log(myRef,myRef.current);
     
    return <div>
        <input ref={myRef}/>
        <button
         onClick={() => {
            console.log(myRef.current.select());
        }
        }>Focus</button>
    </div>
};
export default Ref;