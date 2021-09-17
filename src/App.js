import React from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class App extends React.Component {

  constructor () {
    super();

    this.state = {
      currentPage: "Home"
    }

    this.changePage = this.changePage.bind(this);
    
  }

  changePage (page) {
    this.setState({currentPage: page});
  }

  render () {
    return (
      <div className="App">
        <header className={"topBar"}>
          <h1>cBrixey</h1>
        </header>
        <nav className={"navBar"}>
          <ul>
            <li><div className={"navLink"} onClick={()=>{this.changePage("Home")}}>Home</div></li>
            <li><div className={"navLink"} onClick={()=>{this.changePage("Projects")}}>Projects</div></li>
          </ul>
        </nav>
        {this.state.currentPage === "Home" && <Home />}
        {this.state.currentPage === "Projects" && <Projects />}
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
