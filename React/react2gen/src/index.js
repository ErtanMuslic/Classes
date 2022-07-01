import React from 'react';
import ReactDOM from 'react-dom/client';
import NewCard from './components/functional/Homework1';
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

      {/* HOMEWORK : */}
      <NewCard url="https://cdn-icons-png.flaticon.com/512/81/81609.png" 
      title ="TWITTER" 
      text="
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Expedita ullam aliquid non
      eligendi nemo est neque
      reiciendis error?"
      button ="READ MORE"
      />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
