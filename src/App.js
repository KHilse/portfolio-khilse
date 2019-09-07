import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./navigation/header";
import Nav from "./navigation/nav";
import Content from "./content";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Nav />
          <Content />
        </div>
      </Router>
    </div>
  );
}

export default App;
