import { useCallback } from "react";
import { useMemo } from "react";
import { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
// const Memorize = (porps) => {

//     const [text,setText] = useState(1);
// //     const arrayObj = [{id:"1"} ,{id:"2"} ,{id:"3"}]
// //     const myCallback=useCallback((e) =>{
// //         setText(e.target.value);
// //         console.log(e.target.value);
// // },[setText])
// //     useEffect(() => {
// //         console.log("Here");
// //     })
// //     const filteredArray = useMemo(()=>{
// //         return arrayObj.filter((item)=>item.id.includes(text))
// //     })

    // const change = useCallback((e) =>{
    //     setText(e.target.value);
    // },[]);


//     return <div>
//         <p>{text}</p>
//         <Myinput onChange={change}/>
//         <MyText/>
//         {/* <Myinput onChange={myCallback}/>
//         <Myinput onChange={myCallback}/>
//         <Myinput onChange={myCallback}/> */}
//         {/* {arrayObj.map((item) =>{
//             return <p key ={item.id}>{item.id}</p>
//         })} */}
//     </div>
// };

// const Memorize =(props) =>{
//     const [text,setText] = useState(1);

//     const change = useCallback((e) =>{
//         console.log("first",e);
//         setText(e.target.innerText);
//     },[]);

//     const click= useCallback(()=>{
//         console.log("nesto");
//     },[]);

//     useEffect(()=>{
//         click();
//     },[click]);

//     return <div>
//         <p onClick={()=> setText(text+1)}>{text}</p>
//         <Myinput onChange={change} text={text}/>
//         <MyText/>
//     </div>
// }


// const Myinput= React.memo((props) =>{
//     return <div>
//         <List/>
//         {/* <span>Nesto</span>
//         <input type="text" onChange={props.onChange} />
//          <label htmlFor="My Input"> */}
//     {/*<input  type="text"  onChange={props.onChange}/>
//     </label> */}
//     </div>
// });

// const Memorize =(props) =>{
//     const [text,setText] = useState(1);

//     const array = useMemo(() =>{[{id:"sdf"},{id:"sdfs"},{id:"sdfdsad"},]
//     },[]);

//     const computedArray = useMemo(() =>{array.filter((item)=>{
//         console.log("first")
//         return item.id.concludes("s");
//     });
//     },[array]);
   
//     return <div>
//         <p onClick={()=> setText(text+1)}>{text}</p>
//         {array.map((item)=>{
//             return <p id={item.id}>{item.id}</p>;
//         })};
//     </div>
// }


// const Myinput= React.memo((props) =>{
//     return <div>
//         <List/>
//         {/* <span>Nesto</span>
//         <input type="text" onChange={props.onChange} />
//          <label htmlFor="My Input"> */}
//     {/*<input  type="text"  onChange={props.onChange}/>
//     </label> */}
//     </div>
// });

// const MyText = memo(() =>{
//     return <p>Nesto</p>
// });

// const List = React.memo((props) =>{
//     return [1,2,3,4].map((item) =>{
//         return <div>
//         <span>{item}</span>
//         <button onClick={props.onClick}></button>
//         </div>
//     })
// });

// export default Memorize;