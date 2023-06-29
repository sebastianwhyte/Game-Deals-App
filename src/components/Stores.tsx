import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import steam from '../images/distributors/steam_logo.png';
import gamersgate from '../images/distributors/gamers_gate_logo.png';
import greenmangaming from '../images/distributors/green_man_gaming_logo.png';
import amazon from '../images/distributors/amazon_logo.png';
import gamestop from '../images/distributors/gamestop_logo.png';
import { Link } from "react-router-dom";
import BackButton from "./BackButton";


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


export default function Stores()
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
                <Grid item xs={2}>
                    <Link to="/">
					    <BackButton />
                    </Link>
				</Grid>
			</Grid>
        </div>
    )
}