import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/organisms/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
import SignUp from './components/pages/Signup/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/vetadvisorReact' element={<PrivateRoute />} >
          <Route path='/vetadvisorReact' element={<Home/>} />
        </Route>
        <Route path='/vetadvisorReact/login' element={<Login />} />
        <Route path='/vetadvisorReact/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
