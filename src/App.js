import React, {Component} from 'react';
import './App.css'
import NavBar from './components/NavBar.js'
import Home from './pages/Home.js'
import ResumePage from './pages/ResumePage.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from './pages/Projects.js'
import Blog from './pages/Blog.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      placeholder: '',
    }
  }

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume/" component={ResumePage} />
          <Route path="/projects/" component={Projects} />
          <Route path="/blog/" component={Blog} />
        </Switch>
      </Router>
    )
  }
}

export default App;