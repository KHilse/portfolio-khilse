import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./navigation/header";
import Nav from "./navigation/nav";
import SpinMenu from "./pages/spinmenu";
import ProjectItem from './pages/projectitem';
import TextItem from './pages/textitem';
import { bioContent, aboutContent, skillsContent } from './pages/textcontent';

// Hint for the pages that match the index
// 0: Bio
// 1: About
// 2: Skills
// 3: Project: Asteroid Defense
// 4: Project: Pedals and Pints
// 5: Project: tec.Hire

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
  const content = [
    {
      hideXPosition: '-105vw',
      hideYPosition: '-20vh',
    }
  ];

  const STEP_ANGLE = 60;

  useEffect(() => {
    setTimeout(() => {
      setBioClass('content content-show');
      setShapeIndex(0);
    })
  }, [refresh])

  function handleNavClick(e) {
    console.log('clicked', e.target.id, shapeIndex)
    let newAngle = 0;
    if (e.target.id === 'left') {
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
    else if (e.target.id === 'right') {
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

  function hideContent(i) {
    switch(i) {
      case 0: // bio
        setBioClass('content hide-bio');
        break;
      case 1: // about
        setAboutClass('content hide-about');
        break;
      case 2: // skills
        setSkillsClass('content hide-skills');
        break;
      case 3: // ad
        setAdClass('content hide-ad');
        break;
      case 4: // pp
        setPpClass('content hide-pp');
        break;
      case 5: // th
        setThClass('content hide-th');
        break;
      default:
        break;
    }
  }

  function showContent(i) {
    switch(i) {
      case 0: // bio
        setBioClass('content content-show');
        break;
      case 1: // about
        setAboutClass('content content-show');
        break;
      case 2: // skills
        setSkillsClass('content content-show');
        break;
      case 3: // ad
        setAdClass('content content-show');
        break;
      case 4: // pp
        setPpClass('content content-show');
        break;
      case 5: // th
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
      <ProjectItem id="ad" class={adClass} />
      <ProjectItem id="pp" class={ppClass} />
      <ProjectItem id="th" class={thClass} />
      <SpinMenu navAngleOffset={navAngleOffset} />
      <Nav handleNavClick={handleNavClick} />
    </div>
  )
}

export default App;
