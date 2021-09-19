import React from 'react';
import Inicial from './components/Inicial';
import authHeader from './services/auth-header';
import './style.css';


export default function App() {
  const token = authHeader();

  //if (!token.Authorization) {
    if (false) {
  } else {
    return <Inicial />;
  }
}
