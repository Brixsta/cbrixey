import React from 'react';
import './App.css';
import Home from './components/Home';
import Applications from './components/Applications';
import Footer from './components/Footer'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentPage: "Home"
    }

    this.changePage = this.changePage.bind(this);

  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <div className="App">
        <header className={"topBar"}>
          <h1>cBrixey</h1>
        </header>
        <nav className={"navBar"}>
          <ul>
            <li><div className={"navLink"} onClick={() => { this.changePage("Home") }}>Home</div></li>
            <li><div className={"navLink"} onClick={() => { this.changePage("Applications") }}>Applications</div></li>
            <li><div className={"navLink"} onClick={() => { window.open("https://www.youtube.com/channel/UCSbSnlykuqApwsDJzGo5RNA", "_blank") }}>My YouTube</div></li>
          </ul>
        </nav>
        {this.state.currentPage === "Home" && <Home />}
        {this.state.currentPage === "Applications" && <Applications />}
        <Footer />
      </div>
    );
  }
}
export default App;
