import { useState } from "react";

interface ButtonProps
{
    message: string;
}


function Buttons(props: ButtonProps)
{   
    return (
        <button className='buttons' onClick={handleClick}>{props.message}</button>
    )
}


function handleClick()
{
    return (
        alert('You clicked me')
    );
}


export default function ButtonContainer()
{
    const [msg, setMsg] = useState<string>('');

    return (
        <div>
            <Buttons message={'View Stores'} />
            <Buttons message={'List of All Deals'} />
            <Buttons message={'Game Lookup By Title'} />
         </div>
    )
}