import React from "react";
import style from './Counter.module.css'
class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {count:0};
        // this.handleClick=this.handleClick(this);
    }
    handleClick() {
        console.log(this.state.count)
    }


    increment(e){
        console.log(e);
        this.setState({})
            this.setState({count:this.state.count + 1});
    }

    decrement(e){
        console.log(e);
        this.setState({})
        this.setState({count:this.state.count - 1});
    }

    render(){
    return  <div>
        <p>{this.state.count}</p>
        <button className={style.btn}  onClick={(e) => this.increment(e)}>+</button>
        <button className={style.btn}  onClick={(e)=> this.decrement(e)}>-</button>
    </div>
}
}

export default Counter;