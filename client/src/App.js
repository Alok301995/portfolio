import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Home from "./pages/Home/index";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
