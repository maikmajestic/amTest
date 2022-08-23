import React from 'react';
import logoLetters from '../../Assets/Images/logos/harry.png';

function Header() {
  return (
    <>
      <div className="box-centered mt-3">
        <img src={logoLetters} />
      </div>
      <div className="box-centered text-title text-white">
          Selecciona Filtro
      </div>
    </>
  );
}

export default Header;
