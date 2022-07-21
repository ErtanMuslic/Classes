import style from './Button.module.css'

const Button = (props) =>{

    const {text='Settings',color,radius,size} =props;

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

    return <button className={`${style.normal} ${getColor()} ${getRadius()} ${getSize()}`}>{text}</button>
}

export default Button;