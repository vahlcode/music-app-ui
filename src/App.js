import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Logo from "./Assets/Images/Logo.svg";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      openSideBar: true
    }
  }

  componentDidMount() {
    const menu = document.querySelector(".menu button");
    menu.addEventListener("click", () => {
      this.setState({...this.state, openSideBar: !this.state.openSideBar})
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar show={this.state.openSideBar} logo={Logo}/>
        <Main show={this.state.openSideBar} logo={Logo}/>
      </div>
    )
  }
  
}

export default App;
