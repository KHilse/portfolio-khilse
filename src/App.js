import React, { useState } from 'react';
import './App.css';
import Header from "./navigation/header";
import Nav from "./navigation/nav";
import SpinMenu from "./pages/spinmenu";

const App = props => {

  const [navAngleOffset, setNavAngleOffset] = useState(0);
  const [shapeIndex, setShapeIndex] = useState(0);
  const shape1 = [
    [-400, 400, 0],
    [400, 400, 30],
    [200, 300, 60],
    [-200, 100, 45],
    [-300, 200, 25],
    [-350, 300, -30]
  ];
  const shape2 = [
    [-200, 100, 45],
    [-300, 200, 25],
    [-350, 300, -30],
    [-400, 400, 0],
    [400, 400, 30],
    [200, 300, 60]
  ];
  const STEP_ANGLE = 60;

  const handleNavClick = (e) => {
    console.log('clicked', e.target.id)
    let newAngle = 0;
    if (e.target.id === 'left') {
      if (shapeIndex === 0) {
        setShapeIndex(5);
      } else {
        setShapeIndex(shapeIndex-1);
      }
      newAngle = navAngleOffset - STEP_ANGLE;
    }
    else if (e.target.id === 'right') {
      if (shapeIndex === 5) {
        setShapeIndex(0);
      } else {
        setShapeIndex(shapeIndex+1);
      }
      newAngle = navAngleOffset + STEP_ANGLE;
    }
    setNavAngleOffset(newAngle);
  }

  return (
    <div className="App">
      <Header shape1={shape1[shapeIndex]} shape2={shape2[shapeIndex]} />
      <SpinMenu navAngleOffset={navAngleOffset} />
      <Nav handleNavClick={handleNavClick} />
    </div>
  )
}

export default App;
