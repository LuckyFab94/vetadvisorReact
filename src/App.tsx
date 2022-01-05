import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/organisms/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
