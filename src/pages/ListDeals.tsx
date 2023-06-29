import React from "react";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";

export default function ListDeals()
{
    return (
        <div className="list-deals">
            <h1>List Deals Page</h1>
            <Link to='/'>
                <BackButton />
            </Link>
        </div>
    )
}