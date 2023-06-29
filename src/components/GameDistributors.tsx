import { createTheme, ThemeProvider } from "@mui/material/styles";

import Button from "@mui/material/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import steam from '../images/distributors/steam_logo.png';
import gamersgate from '../images/distributors/gamers_gate_logo.png';
import greenmangaming from '../images/distributors/green_man_gaming_logo.png';
import amazon from '../images/distributors/amazon_logo.png';
import gamestop from '../images/distributors/gamestop_logo.png';
import Grid from "@mui/material/Grid";



{/* This file will display icons for all the video game distributors [once 
the user clicks 'View All Stores' button] */}


const distributorData = [
  {
    id: 1, // Used in JSX as a key
    name: 'Steam',
    image_path: '../images/distributors/steam_logo.png'
  }, 
  {
    id: 2, // Used in JSX as a key
    name: 'Gamers Gate',
    image_path: '../images/distributors/gamers_gate.png'
  }, 
  {
    id: 3, // Used in JSX as a key
    name: 'Green Man Gaming',
    image_path: '../images/distributors/green_man_gaming.png'
  }, 
  {
    id: 4, // Used in JSX as a key
    name: 'Amazon',
    image_path: '/amazon_logo.png'
  }, 
  {
    id: 5, // Used in JSX as a key
    name: 'GameStop',
    image_path: '/gamestop_logo.png'
  }
];


function onSteamClick()
{
  alert('You clicked Steam!');
}

function onGamersGateClick()
{
  alert('You clicked Gamers Gate!');
}

function onGreenManGamingClick()
{
  alert('You clicked Green Man Gaming!');
}

function onAmazonClick()
{
  alert('You clicked Amazon!');
}


function onGamestopClick()
{
  alert('You clicked GameStop!');
}

{/*
const distributorButtons = [
  <Button key='steam' onClick={() => onSteamClick()}> <img src={steam} alt='steam-logo' /></Button>,
  <Button key='gamers-gate' onClick={() => onGamersGateClick()}> <img src={gamersgate} alt='gamers-gate-logo' /></Button>,
  <Button key='green-man-gaming' onClick={() => onGreenManGamingClick()}> <img src={greenmangaming} alt='green-man-gaming-logo' /></Button>
];
*/}

{/* 15 active distributors -- layout should be 3x5 (3 rows with 5 icons each */}


export function GameDistributors()
{
    return (
        <div>
            <h1>Game distributors images/buttons here</h1>
			  <Grid container spacing={2}>
				<Grid item xs={2}>
				  	<Button className='distributor-buttons' key='steam' onClick={() => onSteamClick()}> <img src={steam} alt='steam-logo' /></Button>
				</Grid>
				<Grid item xs={2}>
					<Button className='distributor-buttons' key='gamers-gate' onClick={() => onGamersGateClick()}> <img src={gamersgate} alt='gamers-gate-logo' /></Button>
				</Grid>
       			 <Grid item xs={2}>
					<Button className='distributor-buttons' key='green-man-gaming' onClick={() => onGreenManGamingClick()}> <img src={greenmangaming} alt='green-man-gaming-logo' /></Button>
				</Grid>
        		<Grid item xs={2}>
					<Button className='distributor-buttons' key='amazon' onClick={() => onAmazonClick()}> <img src={amazon} alt='amazon-logo' /></Button>
				</Grid>
        		<Grid item xs={2}>
					<Button className='distributor-buttons' key='gamestop' onClick={() => onGamestopClick()}> <img src={gamestop} alt='gamestop-logo' /></Button>
				</Grid>
			</Grid>
        </div>
    )
}