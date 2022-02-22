import React from 'react'
import './../assets/css/Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img src="http://tous-logos.com/wp-content/uploads/2018/04/logo-Tinder.png" alt="tinder_logo_not_found" className="header__logo" /> 
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon"/>
      </IconButton>
    </div>
  );
}

export default Header;