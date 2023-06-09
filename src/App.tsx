import React from 'react';
import './App.css';
import {Container} from "@mui/system";
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box";
import Header from './components/Header'
import ButtonContainer from './components/Buttons';
import Logo from './components/Logo'


{/*
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
*/}


export default function App()
{
   return (
      <div className='App'>
         <Container maxWidth="xl" sx={{marginTop:0}} >
            <Box justifyContent='center' alignItems='center' minHeight='100vh' style={{ color: 'white', backgroundColor: '#174cfc' }}>
                  <Logo />
                  <Header message={'Game Deals App'}/>
                  <ButtonContainer />
            </Box>
         </Container>
      </div>
   )
}
