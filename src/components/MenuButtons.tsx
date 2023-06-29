import React, {Component,} from "react";
import { useState } from "react";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


// If user clicks on 'View Stores', replace the buttons with an image list 
// with logos for the online video game distributors


{/* Function that creates a buttons object so we can have different names and on click events */}
function Buttons({value}: {value: string})
{
    return (
       <Button>{value}</Button>
    );
}


export default function MenuButtons()
{
    return (
        <div className="menu-buttons">
				<ButtonGroup 
					orientation="vertical"
					aria-label="vertical contained button group"
					variant="contained" 
					>				
					<Link to="/stores">
						<Buttons value={'View Stores'}></Buttons>
					</Link>
					<Link to="/deals">
						<Buttons value={'List All Deals'}></Buttons>
					</Link>
					<Link to="/game-lookup">
						<Buttons value={'Game Lookup By Title'}></Buttons>
					</Link>
				</ButtonGroup>
        </div>
    )
}