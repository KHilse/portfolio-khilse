import React from 'react';
import './App.css';
//import {BrowserRouter as Router} from "react-router-dom";
import Header from "./navigation/header";
import Nav from "./navigation/nav";
import SpinMenu from "./pages/spinmenu";

class App extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      navIndex: 0,
      navAngleOffset: 0      
    }
  }

  handleNavClick = (e) => {
    console.log('clicked', e.target.id)
    let newAngle = 0;
    if (e.target.id === 'left') {
      newAngle = this.state.navAngleOffset - 60;
    }
    else if (e.target.id === 'right') {
      newAngle = this.state.navAngleOffset + 60;
    }
    this.setState({ navAngleOffset: newAngle })
  }

  render () {
    return (
      <div className="App">
        <Header />
        <SpinMenu navAngleOffset={this.state.navAngleOffset} />
        <Nav handleNavClick={this.handleNavClick} />
      </div>
    )
  }
}

export default App;
