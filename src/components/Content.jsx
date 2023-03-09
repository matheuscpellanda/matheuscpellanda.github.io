import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export default function Content() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
    </Routes>
  );
}
