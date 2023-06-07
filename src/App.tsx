import React from 'react';
import './App.css';
import Header from './components/Header'
import ButtonContainer from './components/Buttons';
import logo from './images/game-controller.svg';
import Container from "@mui/material/Container";

{/* import logo from './logo.svg'; */}

function App() 
{
  return (
    <div className="App">
      <div className='backdrop'>
         <div className='logo'>
            <img src={logo} height='200' width='200'></img>
         </div>
         <div className='header'>
            <Header message={'Game Deals App'} />
         </div>
         <div className='button-container'>
            <ButtonContainer />
         </div>
      </div>
    </div>
  );
}

export default App;
