import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function GameLookup()
{
    return (
        <div className="game-lookup">
            <h1>Game Lookup Page</h1>
            <Link to='/'>
                <BackButton />
            </Link>
        </div>
    );
}