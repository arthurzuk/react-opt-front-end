import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

import authHeader from './services/auth-header';

import './style.css';

export default function App() {
  const token = authHeader();

  //if (!token.Authorization) {
    if (false) {
    return <Redirect to={{ pathname: '/login' }} />;
  } else {
    return <Sidebar />;
  }
}
