import React from 'react';
import './App.css';
import Home from './components/Home';
import Applications from './components/Applications';
import Videos from './components/Videos';

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
            <li><div className={"navLink"} onClick={()=>{this.changePage("Applications")}}>Applications</div></li>
            <li><div className={"navLink"} onClick={()=>{this.changePage("Videos")}}>My YouTube</div></li>
          </ul>
        </nav>
        {this.state.currentPage === "Home" && <Home />}
        {this.state.currentPage === "Applications" && <Applications />}
        {this.state.currentPage === "Videos" && <Videos />}
        <footer className={"footer"}>
          <div className="social-media-bar" onClick={()=> window.open("https://github.com/Brixsta", "_blank")}>
            <div className="social-media-box">
              <i class="fab fa-github"></i>
            </div>
            <div className="social-media-box" onClick={()=> window.open("https://linkedin.com/in/charles-brixey-53144680/", "_blank")}>
            <i class="fab fa-linkedin"></i>
            </div>
            <div className="social-media-box" onClick={()=> window.open("mailto:Brixsta@gmail.com", "_blank")}>
              <i class="fas fa-envelope-open"></i>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
