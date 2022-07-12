import style from './Card.module.css';
const Conditional = (props) => {
    const { text,type,subtitle,extraText,extraIcon} = props;

    if(type === undefined){
        return null;
    }

    const getTypeStyle= () => {
        switch(type){
            case "warning":
            return style.warning;
            case "danger":
                return style.danger;
            default:
                return style.info;
        }
    }

    return <div className={`${style.card} ${getTypeStyle()}`}>
        <img
        className={style.icon} 
        src="https://static.vecteezy.com/system/resources/previews/005/747/906/original/info-icon-template-information-icon-colorful-free-vector.jpg" alt="" />
        <div className={style.text}>
            <p className={style.title}>{text}</p>
            {subtitle && <p>{subtitle}</p>}
            {extraIcon || extraText}
            {extraText ? extraText : extraIcon}
        </div>
    </div>;
}

export default Conditional;