/* eslint-disable @typescript-eslint/no-empty-function */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import ItineraryPage from './pages/Itinerary';

interface MyContextType {
  id: string;
  isCheckedIn: boolean;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setIsCheckedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MyContext = React.createContext<MyContextType>({
  id: '',
  isCheckedIn: false,
  setId: () => {},
  setIsCheckedIn: () => {},
});

function App() {
  const [id, setId] = useState('');
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const contextValue = {
    id: id,
    isCheckedIn: isCheckedIn,
    setId: setId,
    setIsCheckedIn: setIsCheckedIn,
  };
  return (
    <MyContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<History />} />
          <Route path={`/home/`} element={<Home />} />
          <Route path={`/itinerary/`} element={<ItineraryPage />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
