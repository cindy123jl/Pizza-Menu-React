import React from "react"; //importing the React library
import ReactDOM from "react-dom/client"; //importing the ReactDOM library

function App() {
  return <h1>Hello React</h1>;
}

//this is how we render in the root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //runs code to check for bugs just a nice to have not required
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
