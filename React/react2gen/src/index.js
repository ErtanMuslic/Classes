import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/class/App';
// import AppF from './components/functional/AppF';
import Card from './components/functional/card';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name={{name:"Ertan"}}>
      <p>I am a Child</p>
      </App>
      <AppF name="Eki">
        <p>I am child of fictional component</p>
      </AppF> */}
      <div style={{display:"flex",flexWrap:"wrap"}}>
        
      <Card title="Ertan Muslic" job="Best Pyton Coder" url='https://www.w3schools.com/howto/img_avatar.png'/>
      <Card title="Ertan Muslic" job="Best Pyton Coder" url='https://www.w3schools.com/howto/img_avatar.png'/>
      <Card title="Ertan Muslic" job="Best Pyton Coder" url='https://www.w3schools.com/howto/img_avatar.png'/>
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
