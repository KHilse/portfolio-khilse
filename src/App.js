import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./navigation/header";
import Nav from "./navigation/nav";
import SpinMenu from "./pages/spinmenu";
import ProjectItem from './pages/projectitem';
import TextItem from './pages/textitem';
import { bioContent, aboutContent, skillsContent, adContent, ppContent, thContent } from './pages/textcontent';

const App = props => {

  const [navAngleOffset, setNavAngleOffset] = useState(0);
  const [shapeIndex, setShapeIndex] = useState(0);
  const [bioClass, setBioClass] = useState('content hide-bio');
  const [aboutClass, setAboutClass] = useState('content hide-about');
  const [skillsClass, setSkillsClass] = useState('content hide-skills');
  const [adClass, setAdClass] = useState('content hide-ad');
  const [ppClass, setPpClass] = useState('content hide-pp');
  const [thClass, setThClass] = useState('content hide-th');
  const [refresh] = useState(true);

  // These are SVG paths for the moving background shapes
  const shape1 = [
    [-800, 400, 0],
    [400, -400, 60],
    [200, 300, 90],
    [-200, 100, 45],
    [-600, 200, 25],
    [-350, 300, -30]
  ];
  const shape2 = [
    [-200, 100, 45],
    [-600, 200, 25],
    [-350, 300, -30],
    [-800, 400, 0],
    [400, -400, 60],
    [200, 300, 90]
  ];
  
  // This is the angle the menu rotates for each left/right/swipe move
  // 360 degrees / 6 items
  const STEP_ANGLE = 360 / 6;
  
  useEffect(() => {
    setTimeout(() => {
      setBioClass('content content-show');
      setShapeIndex(0);
    })
  }, [refresh])

  // The mouse-specific nav handler
  function handleNavClick(e) {
    handleNav(e.target.id);
  }

  // The generic nav handler
  function handleNav(direction) {
    let newAngle = 0;
    if (direction === 'right') {
      if (shapeIndex === 0) {
        hideContent(0);
        showContent(5);
        setShapeIndex(5);
      } else {
        hideContent(shapeIndex);
        showContent(shapeIndex-1);
        setShapeIndex(shapeIndex-1);
      }
      newAngle = navAngleOffset - STEP_ANGLE;
    }
    else if (direction === 'left') {
      if (shapeIndex === 5) {
        hideContent(5);
        showContent(0);
        setShapeIndex(0);
      } else {
        hideContent(shapeIndex);
        showContent(shapeIndex+1);
        setShapeIndex(shapeIndex+1);
      }
      newAngle = navAngleOffset + STEP_ANGLE;
    }
    setNavAngleOffset(newAngle);
  
  }

  // Transition content panes off the page when not viewing
  // Swapping CSS classes to achieve the effect
  function hideContent(i) {
    switch(i) {
      case 0: // bio
        setBioClass('content hide-bio');
        break;
      case 5: // about
        setAboutClass('content hide-about');
        break;
      case 4: // skills
        setSkillsClass('content hide-skills');
        break;
      case 3: // ad
        setAdClass('content hide-ad');
        break;
      case 2: // pp
        setPpClass('content hide-pp');
        break;
      case 1: // th
        setThClass('content hide-th');
        break;
      default:
        break;
    }
  }

  // Transition content pane to the center of the page when focused
  // Swapping CSS classes to achieve the effect
  function showContent(i) {
    switch(i) {
      case 0: // bio
        setBioClass('content content-show');
        break;
      case 5: // about
        setAboutClass('content content-show');
        break;
      case 4: // skills
        setSkillsClass('content content-show');
        break;
      case 3: // ad
        setAdClass('content content-show');
        break;
      case 2: // pp
        setPpClass('content content-show');
        break;
      case 1: // th
        setThClass('content content-show');
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Header shape1={shape1[shapeIndex]} shape2={shape2[shapeIndex]} />
      <TextItem id="bio" class={bioClass} content={bioContent} />
      <TextItem id="about" class={aboutClass} content={aboutContent} />
      <TextItem id="skills" class={skillsClass} content={skillsContent} />
      <ProjectItem id="ad" class={adClass} content={adContent} />
      <ProjectItem id="pp" class={ppClass} content={ppContent} />
      <ProjectItem id="th" class={thClass} content={thContent} />
      <SpinMenu navAngleOffset={navAngleOffset} handleNav={handleNav} />
      <Nav handleNavClick={handleNavClick} handleNav={handleNav} />
    </div>
  )
}

export default App;
