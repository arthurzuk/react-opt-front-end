import React from 'react';
import Inicial from './components/Inicial';
import Login from './components/Login/Login';
import authHeader from './services/auth-header';
import './style.css';


export default function App() {
  const token = authHeader();


  return <Inicial />;

}
