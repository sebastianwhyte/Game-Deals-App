import React from "react";
import Box from "@mui/material/Box";
import MenuHeader from '../components/MenuHeader'
import MenuLogo from '../components/MenuLogo'
import MenuContainer from '../components/MenuContainer';
import Container from "@mui/material/Container";

export default function AppMenu()
{
    return (
		<div className="Menu">
			<Container maxWidth="xl" sx={{margin:0}} >
				<Box justifyContent='center' alignItems='center' minHeight='100vh' minWidth='100vw' style={{ color: 'white', backgroundColor: '#588af5' }}>
					<MenuLogo />
					<MenuHeader message={'Game Deals App'}/>
					<MenuContainer />
				</Box>
         </Container>
		</div>
    );
}