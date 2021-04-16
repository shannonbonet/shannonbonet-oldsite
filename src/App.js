import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js"; 
import Writing from "./pages/Writing.js"; 

function App() {
  return (
    <Router> 
      <div className="page">
        <nav className="header">
          <Link to="/"> <h1>me</h1></Link> 
          <Link to="/projects"> <h1>projects</h1></Link> 
          <Link to="/writing"><h1>writing</h1></Link>
        </nav>
      <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/writing">
            <Writing />
          </Route>
          {/* Switch renders the first matching URL */}
          <Route path="/"> 
            <About />
          </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;