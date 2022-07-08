import React from "react";

class Countdown extends React.Component{
    constructor(props){
        super(props);
        this.state={counter:Math.ceil(Math.random() * 10) };
    }

    componentDidMount(){
        this.timerID = setInterval(() =>{
            if(this.state.counter !==0){
            this.setState({
                counter:this.state.counter - 1
            });
    } else{
        clearInterval(this.timerID);
    }
},1000);
}

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return <p>
            {this.state.counter}
        </p>
    }
}

export default Countdown;