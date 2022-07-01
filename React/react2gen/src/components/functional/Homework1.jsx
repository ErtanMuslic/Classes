import './Homework.css';

const NewCard = (props) => {
    const {url,title,text,button} = props;
    return <div className="card">
        <img src={url} alt="ERROR"/>
        <h1 className='title'>{title}</h1>
        <p className='text'>{text}</p>
        <button className='button'>{button}</button>
    </div>
}

export default NewCard;