import Box from '@mui/material/Box';
import { useState } from 'react';
import MenuButtons from './MenuButtons';
import { GameDistributors } from './GameDistributors';

{/* This container will hold the buttons and will change to tables based on
which option the user selects at the main menu */}


{/*
const [state, setState] = useState({show: [true, true, false]});

const showHide = () => {
    setState(prevState => ({show: !prevState.show}));
    const newItems [...];
}
*/}

export default function MenuContainer()
{
    return (
        <div>
            <Box>
            <MenuButtons />
            </Box>
        </div>
    );
}