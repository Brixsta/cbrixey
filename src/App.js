import React from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      home: true,
      projects: false,
      contact: false
    }

    this.homeClick = this.homeClick.bind(this);
    this.projectsClick = this.projectsClick.bind(this);
    this.contactClick = this.contactClick.bind(this);
  }

  homeClick () {
      this.setState({home: true, projects: false, contact: false});
  }

  projectsClick () {
    this.setState({home: false, projects: true, contact: false});
  }

  contactClick () {
    this.setState({home: false, projects: false, contact: true});
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
            <li><div className={"navLink"} onClick={this.contactClick}>Contact</div></li>
          </ul>
        </nav>
        {this.state.home === true && <Home />}
        {this.state.projects === true && <Projects />}
        {this.state.contact === true && <Contact />}
        <footer className={"footer"}>
          <div className={"socialMediaBar"}>
            <div className={"socialMediaBox"} onClick={()=> window.open("https://github.com/Brixsta", "_blank")}><img src="github.svg" height="100%" width="100%"></img></div>
            <div className={"socialMediaBox"} onClick={()=> window.open("https://linkedin.com/in/charles-brixey-53144680/", "_blank")}><img src="linkedin.svg" height="100%" width="100%"></img></div>
            <div className={"socialMediaBox"} onClick={()=> window.open("mailto:Brixsta@gmail.com", "_blank")}><img src="email.svg" height="100%" width="100%"></img></div>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
