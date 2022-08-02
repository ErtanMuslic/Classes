

const QuoteCard = (props) => {

    const {content,author} = props;

        
    return  <div style={{border:"2px solid black",marginTop:"10px",marginBottom:"10px"}}>
    <p>{content}</p>
    <p style={{textAlign:"center"}}>By: {author} </p>
</div>
}

export default QuoteCard;