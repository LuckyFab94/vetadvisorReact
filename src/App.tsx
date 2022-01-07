import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/organisms/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
import SignUp from './components/pages/Signup/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddVeterinario from './components/pages/AddVeterinario/AddVeterinario';
import Forum from './components/pages/Forum/Forum';
import Profile from './components/pages/Profile/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/vetadvisorReact' element={<Home />} />
        <Route path='/vetadvisorReact/addVeterinario' element={<AddVeterinario />} />
        <Route path='/vetadvisorReact/forum' element={<Forum />} />
        <Route path='/vetadvisorReact/login' element={<Login />} />
        <Route path='/vetadvisorReact/signup' element={<SignUp />} />
        <Route path='/vetadvisorReact/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
