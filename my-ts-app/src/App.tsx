import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SimpleComponents from './components/SimpleComponents';

// interface AppProps{
//   name: string 
// }

function App() {
  // const {name} = props;

  // let a : string
  // let b:boolean
  // let c:object
  // let d: string[]//array of strings
  // let f: object[]
  // let g:any[];

  // c = {}
  // d=["10","1","9"]

  return (
    <div className="App">
      <SimpleComponents name='Ertan' age={21}>
        <p></p>
      </SimpleComponents>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
