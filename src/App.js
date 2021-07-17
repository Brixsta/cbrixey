import React from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Concepts from './components/Concepts';

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      home: true,
      projects: false,
      concepts: false
    }

    this.homeClick = this.homeClick.bind(this);
    this.projectsClick = this.projectsClick.bind(this);
    this.conceptsClick = this.conceptsClick.bind(this);
  }

  homeClick () {
      this.setState({home: true, projects: false, concepts: false});
  }

  projectsClick () {
    this.setState({home: false, projects: true, concepts: false});
  }

  conceptsClick () {
    this.setState({home: false, projects: false, concepts: true});
  }

  render () {
    return (
      <div className="App">
        <header className={"topBar"}>
          <h1>cBrixey</h1>
        </header>
        <nav className={"navBar"}>
          <ul>
            <li><div className={"navLink"} onClick={this.homeClick}>Home</div></li>
            <li><div className={"navLink"} onClick={this.projectsClick}>Projects</div></li>
            <li><div className={"navLink"} onClick={this.conceptsClick}>Concepts</div></li>
          </ul>
        </nav>
        {this.state.home === true && <Home />}
        {this.state.projects === true && <Projects />}
        {this.state.concepts === true && <Concepts />}
        <footer className={"footer"}>
          <div className={"socialMediaBar"}>
            <div className={"socialMediaBox"} onClick={()=> window.open("https://github.com/Brixsta", "_blank")}><img src="github.svg" height="100%" width="100%" alt="github"></img></div>
            <div className={"socialMediaBox"} onClick={()=> window.open("https://linkedin.com/in/charles-brixey-53144680/", "_blank")}><img src="linkedin.svg" height="100%" width="100%" alt="linkedin"></img></div>
            <div className={"socialMediaBox"} onClick={()=> window.open("mailto:Brixsta@gmail.com", "_blank")}><img src="email.svg" height="100%" width="100%" alt="email"></img></div>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
