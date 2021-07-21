import React from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Concepts from './components/Concepts';

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      currentPage: "Home",
      count: 0
    }
  }

  changePage (page, e) {
      e.preventDefault();
      if(this.state.currentPage === page) {
        this.setState({count: this.state.count++})
      } else {
        this.setState({currentPage:`${page}`});
      }
  }



  render () {
    return (
      <div className="App">
        <header className={"topBar"}>
          <h1>cBrixey</h1>
        </header>
        <nav className={"navBar"}>
          <ul>
            <li><div className={"navLink"} onClick={this.changePage.bind(this,"Home")}>Home</div></li>
            <li><div className={"navLink"} onClick={this.changePage.bind(this,"Projects")}>Projects</div></li>
            <li><div className={"navLink"} onClick={this.changePage.bind(this,"Concepts")}>Concepts</div></li>
          </ul>
        </nav>
        {this.state.currentPage === "Home" && <Home />}
        {this.state.currentPage === "Projects" && <Projects />}
        {this.state.currentPage === "Concepts" && <Concepts goBack={this.state.count}/>}
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
