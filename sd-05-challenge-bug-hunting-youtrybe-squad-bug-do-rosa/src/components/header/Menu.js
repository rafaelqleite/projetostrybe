import React from 'react';
import youtubeLogo from './../../assets/youlogo.png';

import '../../css/menu.css';

function Menu() {
  return (
    <div className="menu">
      <i className="material-icons">menu</i>
      <img className="youlogo" alt="Youtube logo" src={youtubeLogo} />
    </div>
  );
}

export default Menu;
