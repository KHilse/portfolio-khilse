import React from "react";
import {Route, Link} from "react-router-dom";


// Static Routes
import Header from "./navigation/header";

// Routes
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Projects from "./pages/projects";

const Content = props => {

  console.log("CONTENT PROPS", props);
  let posts = props.blogPosts;

  return (
  <main>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" render={(props) => <Blog blogPosts={posts} /> } />
      <Route path="/projects" component={Projects} />
    </div>
  </main>
  )
}

export default Content;