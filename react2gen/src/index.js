import React from 'react';
import ReactDOM from 'react-dom/client';
// import CheckBox from './components/functional/CheckBox';
// import Composition from './components/functional/Composition';
// import Badge from './components/functional/Badge/Badge';
// import Calculator from './components/functional/Calculator/Calculator';
// import Conditional from './components/functional/Conditional';
// import SimpleForm from './components/functional/Forms';
// import Button from './components/functional/MainButton';
import Tab from './components/functional/Tab';
import TabsExample from './components/functional/TabsExample';
// import Quotes from './components/functional/Quotes';
// import TextInput from './components/functional/TextInputs';

// import Countdown from './components/class/Countdown';
// import Counter from './components/class/Counter';
// import CounterF from './components/functional/CounterF';
// import RandomColor from './components/functional/RandomColor';
// import FromDate from './components/class/fromdate';
// import Ping from './components/class/Ping';
// import PingF from './components/functional/PingF';
// import NewCard from './components/functional/Homework1';
// import App from './components/class/App';
// import AppF from './components/functional/AppF';
// import Card from './components/functional/card';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*


    CLASS 1:



    <App name={{name:"Ertan"}}>
      <p>I am a Child</p>
      </App>
      <AppF name="Eki">
        <p>I am child of fictional component</p>
      </AppF> 
      <div style={{display:"flex",flexWrap:"wrap"}}>
        
      <Card title="Ertan Muslic" job="Best Pyton Coder" url='https://www.w3schools.com/howto/img_avatar.png'/>
      <Card title="Ertan Muslic" job="Best Pyton Coder" url='https://www.w3schools.com/howto/img_avatar.png'/>
      <Card title="Ertan Muslic" job="Best Pyton Coder" url='https://www.w3schools.com/howto/img_avatar.png'/>
      </div>
      */}



      {/* 
      
      HOMEWORK :


      <NewCard url="https://cdn-icons-png.flaticon.com/512/81/81609.png" 
      title ="TWITTER" 
      text="
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Expedita ullam aliquid non
      eligendi nemo est neque
      reiciendis error?"
      button ="READ MORE"
      /> */}

{/*    


      CLASS 2:



      <Ping/>
      <PingF/>
      <Countdown/>
      <FromDate/> */}

      
      { /*
      CLASS 3:

      
       <Counter/> 
      <CounterF/>
      <RandomColor/> */}


      {/* HOMEWORK 2(CALCULATOR): 
      <Calculator/>
      */}

      
      {/* <Conditional text ='Ovo je prvi primer kartice' 
      type="info" 
      subtitle="Neki subtitle za nasu karticu"
      extraText="Ovo je neki text"
      extraIcon ="ovo je neka ikonica"
      />
      <Conditional text ='Ovo je prvi primer kartice' type="danger"/>
      <Conditional text ='Ovo je prvi primer kartice' type ="warning"/>
      <Badge type="1"/>
      <Badge type="2"/> */}

      {/* <TextInput/>

      <Quotes/> 
      <SimpleForm/>
    */}

{/*     
    <Composition left={<SimpleForm/>}>
      <p>text</p>
    </Composition> */}

    {/* <Button color="green" radius="xs" size="xs"/>
    <Button color="red" radius="sm" size="sm"/>
    <Button color="white" radius="md" size="md"/>
    <Button radius="lg" size="lg"/>
    <Button text="CLICK" color="white" radius="xl" size="xl"/>


    <CheckBox  text="some text" color="red" size="xl"/> */}

    <Tab onChange={(index) => console.log(index)}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
