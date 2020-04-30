import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/jumbotron/jumbotron"
import UserContainer from "./components/userContainer/userContainer"

function App() {
  return (
    <div className="App">
     <Jumbotron></Jumbotron>
     <UserContainer></UserContainer>
    </div>
  );
}

export default App;
