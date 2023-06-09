import React from 'react';
import './App.css';
import {Container} from "@mui/system";
import Box from "@mui/material/Box";
import Header from './components/Header'
import ButtonContainer from './components/Buttons';
import Logo from './components/Logo'


export default function App()
{
   return (
      <div className='App'>
         <Container maxWidth="xl" sx={{marginTop:0}} >
            <Box justifyContent='center' alignItems='center' minHeight='100vh' minWidth='100vw' style={{ color: 'white', backgroundColor: '#174cfc' }}>
                  <Logo />
                  <Header message={'Game Deals App'}/>
                  <ButtonContainer />
            </Box>
         </Container>
      </div>
   )
}
