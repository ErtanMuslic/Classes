import { useState } from 'react';
import style from './CheckBox.module.css'

const CheckBox = (props) =>{

    const {text,color,radius,size} =props;
    const [checked,setChecked] = useState(false);

    const handleChange = () =>{
        setChecked(!checked);
    };

    const getColor=() =>{
    switch(color){
        case "grey":
            return style.grey;
        case "green":
            return style.green;
        case "white":
            return style.white;
        case "red":
            return style.red;
        default:
            return style.main;
    }
}

const getRadius=() =>{
    switch(radius){
        case "xs":
            return style.radiusxs;
        case "sm":
            return style.radiussm;
        case "md":
            return style.radiusmd;
        case "lg":
            return style.radiuslg;
        case "xl":
            return style.radiusxl
        default:
            return style.radiusmd;
    }
}

const getSize=() =>{
    switch(size){
        case "xs":
            return style.sizexs;
        case "sm":
            return style.sizesm;
        case "md":
            return style.sizesmd;
        case "lg":
            return style.sizelg;
        case "xl":
            return style.sizexl
        default:
            return style.sizemd;
    }
}

    return <label className={`${getSize()}`}>
        <input
        type="checkbox" 
         checked={checked}
        onChange={handleChange}
        className={`${getColor()} ${getRadius()}`}
        />
        {text}
    </label>
}

export default CheckBox;