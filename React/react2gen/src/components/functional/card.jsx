import './Card.css';
const Card =  (props) =>{
    const {url,title,job} = props;
    return <div className="card">
        <img src={url} alt=""/>
        <p className='title'>{title}</p>
        <p >{job}</p>
    </div>
}
export default Card;