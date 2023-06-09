import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";


const buttons = [
    <Button key='view-stores'>View Stores</Button>,
    <Button key='list-all-deals'>List All Deals</Button>,
    <Button key='game-lookup'>Game Lookup By Title</Button>
];

function handleClick()
{
    return (
        alert('You clicked me')
    );
}

export default function ButtonContainer()
{
    return (
        <div>
            <ButtonGroup 
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained" 
                onClick={handleClick}>{buttons}
                </ButtonGroup>
        </div>
    )
}