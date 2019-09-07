import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./navigation/header";
import Nav from "./navigation/nav";
import Content from "./content";

class App extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      blogPosts: [
        ["Hey I'm really proud of you! Have a chocolate bar", "Grandma", "9/3/2019"],
        ["I'm your biggest fan! Pleez come home and pet me forever or for 9.3 seconds", "Your cat", "9/4/19"],
        ["Nice page. Can you bring home some milk for the fridge?", "Your wife", "9/6/19"]
      ]
    }

  }

  render () {
    return (
      <div className="App">
       <Header />
       <Router>
         <div>
           <Nav />
           <Content blogPosts={this.state.blogPosts} />
         </div>
       </Router>
     </div>
    )
  }
}

export default App;
