import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <h1>React App Is Loaded</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
