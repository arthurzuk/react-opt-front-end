import React from 'react';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import './style.css';

export default function App() {
  if (true) {
    return <Login />;
  } else {
    return <Sidebar />;
  }
}
