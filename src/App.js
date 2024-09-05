import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hd from './component/Hd';
import Maincontents from './component/Maincontents';
import Quik from './component/Quik';
import Ft from './component/Ft';
import FindRestaurant from './component/Findrestaurant';

function App() {
  return (
    <>
      <Hd />
      <Routes>
        <Route path="/" element={<Maincontents />} />
        <Route path="/Findrestaurant" element={<FindRestaurant />} />
      </Routes>
      <Quik />
      <Ft />
    </>
  );
}

export default App;
