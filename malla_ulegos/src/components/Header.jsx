import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <a href="https://www.ulagos.cl/">
        <img 
          src="https://www.ulagos.cl/wp-content/themes/ulagos2023/img/logoulagos.png" 
          className="logo-image" 
        />
      </a>
      <div className="title">Malla Curricular ICINF - 2020</div>
    </header>
  );
}
