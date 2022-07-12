import style from './Badge.module.css';

const Badge = (props) => {
    const {type} = props;

    if(type === undefined){
        return null;
    }

    const getTypeImage= () => {
        switch(type){
            case "1":
            return "https://static.vecteezy.com/system/resources/previews/005/747/906/original/info-icon-template-information-icon-colorful-free-vector.jpg";
            case "2":
                return "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ;
            default:
                return ;
        }
    }


    return <div>
        <div className={style.circle}>
            <img src={getTypeImage()} 
            style={{width:"200px",height:"200px",border:"1px solid black",borderRadius:"50%"}}
            alt="" />
        </div>
    </div>
}
export default Badge;