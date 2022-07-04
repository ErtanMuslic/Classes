import React from "react";
class FromDate extends React.Component{
    constructor(props){
        super(props);
        const date = new Date(2022,6,1,5,23,59);
        this.state={ dayYesterday:date,time:this.calculateDateDiff()}
    }

    calculateDateDiff(){
       console.log(parseInt((new Date().getTime() / 1000).toFixed(0)));
    console.log(parseInt((new Date(2022,6,1,5,23,59).getTime() / 1000).toFixed(0)))
     return  parseInt((new Date().getTime() / 1000).toFixed(0)) - parseInt((new Date(2022,6,1,5,23,59).getTime() / 1000).toFixed(0))
    }
    componentDidMount(){
        this.intervalId=setInterval(() =>{
            this.setState({
                time:this.state.time+1
            });
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        return <p>
            {this.state.time}
        </p>
    }
}
export default FromDate;