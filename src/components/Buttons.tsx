import React, {Component,} from "react";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { Route } from "react-router-dom";


const buttons = [
    <Button key='view-stores' onClick={() => displayStores()}>View Stores</Button>,
    <Button key='list-all-deals' onClick={() => displayAllDeals()}>List All Deals</Button>,
    <Button key='game-lookup' onClick={() => displayGameLookup()}>Game Lookup By Title</Button>
];


function displayStores()
{
    alert('Stores: Steam, Gamers Gate, Green Man Gaming, Amazon, GameStop');
}

function displayAllDeals()
{
    alert('List All Deals');
}

function displayGameLookup()
{
    alert('Game Lookup By Title');
}


export default function ButtonContainer()
{
    return (
        <div>
            <ButtonGroup 
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained" 
                >
                  {buttons}
                </ButtonGroup>
        </div>
    )
}