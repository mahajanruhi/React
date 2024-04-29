import React, { useState } from "react";
import Head from "./Head";
import List from "./List";

//Components

function App() {
return (
  <>
   <Head/>
      <List/></>
);
}

 //use state
const Apps = () => {
const [count, setCount] = useState(0);
const IncNum = () => {
  setCount(count + 1);
};
return (
  <>
  <h1> {count} Click </h1>
  <button onClick={IncNum}> Click Me </button>
  </>
);

};


export default App;
export {Apps};