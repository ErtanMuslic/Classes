import * as React from 'react'
interface Props {
    name:string | number;
    age:number;
    children:React.ReactNode //any; //JSX.Element;
}

// interface Props2 extends Props{
//     address:string;
// }

// type Props3<T = unknown> = T & {surname: string};

const SimpleComponents = (props:React.PropsWithChildren<Props>) => {
    const {name,age} = props;
    // const a:Props2 ={};
    // const a:Props3<> = {};
    return <div>
        <p>{name}</p>
        <p>{age?.toString()}</p>
        <p>{props.children}</p>
    </div>
}

export default SimpleComponents;
