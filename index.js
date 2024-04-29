import React from "react";
import ReactDOM from "react-dom";
import App, {Apps} from './App' ;
import './index.css'

//component

ReactDOM.render(
     <App/>
 , document.getElementById('root')
);

//props
function Car(props) {
    return <h1>I am a { props.brand }!</h1>;
  }
  
  const myElement = <Car brand="Ford" />;
  
  const root =   ReactDOM.createRoot(document.getElementById('root1'));
  root.render(myElement);

    //forms
    
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

const value =  ReactDOM.createRoot(document.getElementById('root2'));
value.render(<MyForm />);


  //hook state method
  
  ReactDOM.render(
    <Apps/>
, document.getElementById('root3')
);
