import React from 'react';
import { Security } from './Pages/Security';

export default function Sidebar() {
  return (
    <div class="main_container">
      <div class="menu">
        <label class="title">Segurança e Privacidade</label>
      </div>
      {Security()}
    </div>
  );
}
