import React from 'react';
import './App.css';
//import {BrowserRouter as Router} from "react-router-dom";
import Header from "./navigation/header";
import Nav from "./navigation/nav";
import Projects from "./pages/projects";

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
      newAngle = this.state.navAngleOffset - 30;
    }
    else if (e.target.id === 'right') {
      newAngle = this.state.navAngleOffset + 30;
    }
    this.setState({ navAngleOffset: newAngle })
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Nav handleNavClick={this.handleNavClick} />
        <Projects navAngleOffset={this.state.navAngleOffset} />
      </div>
    )
  }
}

export default App;
