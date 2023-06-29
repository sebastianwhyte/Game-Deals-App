import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppMenu from './pages/AppMenu';
import Stores from './components/Stores';
import ListDeals from './pages/ListDeals';
import GameLookup from './pages/GameLookup';

export default function App()
{
   return (
      <div className='App'>
			 <Routes>
			 	<Route path='/' element={<AppMenu />} />
			 	<Route path='/stores' element={<Stores />}/>
				<Route path='/deals' element={<ListDeals />} />
				<Route path='/game-lookup' element={<GameLookup />} />
			</Routes>
      </div>
   )
}
