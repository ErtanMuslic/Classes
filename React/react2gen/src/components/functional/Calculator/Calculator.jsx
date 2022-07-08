import React from "react";
import { useState } from "react";
import './Calculator.css';

const Calculator =() => {
    let [num,setnum] = useState("");

    let getNum = (num,param) =>{
        setnum(num + param)
    }


    const Clear = () =>{
        setnum('');
    }

    const Calculate= () => {
        setnum(eval(num))
    }


    return <div className="cHead">
        <p 
        style=
        {{textAlign:"center",
          fontWeight:"bold",
          fontSize:"25px"}}>
            CALCULATOR
            </p>

        <p className="num">{num}</p>

        <div className="btn1">
            <button className="btn2" onClick = {  () =>   {getNum(num,'1')}   }>  1   </button>
            <button className="btn2" onClick = {  ()  =>  {getNum(num,'2')}   }>  2   </button>
            <button className="btn2" onClick = {  ()  =>  {getNum(num,'3')}   }>  3   </button>
            <button className="btn2" style = {{backgroundColor:"black"}} onClick={  ()  =>  {getNum(num,'*')}   }>  *   </button>
            <button className="btn2" onClick = {  ()  =>  {getNum(num,'4')}   }>  4   </button>
            <button className="btn2" onClick = {  ()  =>  {getNum(num,'5')}   }>  5   </button>
            <button className="btn2" onClick = {  ()  =>  {getNum(num,'6')}   }>  6   </button>
            <button className="btn2" style = {{backgroundColor:"black"}} onClick={  ()  =>  {getNum(num,'/')}   }>  /   </button>
            <button className="btn2" onClick = {  ()  =>  {getNum(num,'7')}   }>  7   </button>
            <button className="btn2" onClick = {  ()  =>  {getNum(num,'8')}   }>  8   </button>
            <button className="btn2" onClick = {  ()  =>  {getNum(num,'9')}   }>  9   </button>
            <button className="btn2" style = {{backgroundColor:"black"}} onClick={  ()  =>  {getNum(num,'+')}   }>  +   </button>
            <button className="btn2" style = {{backgroundColor:"red"}}   onClick={  Clear   }>  C   </button>
            <button className="btn2" onClick = {  ()  =>  {getNum(num,'0')}   }>  0 </button>
            <button className="btn2" style = {{backgroundColor:"black"}} onClick={  Calculate }>    =   </button>
            <button className="btn2" style = {{backgroundColor:"black"}} onClick={  ()  =>  {getNum(num,'-')}   }>  - </button>
        </div>
    </div>
}

export default Calculator