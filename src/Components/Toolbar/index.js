import React from 'react';
import { FaBookmark, FaUserPlus, } from 'react-icons/fa';

function Toolbar() {
  return (
    <div className="box-actions">
      <button className="btn-action">Favoritos <span><FaBookmark/></span></button>
      <button className="btn-action btn-add">Agregar <FaUserPlus/></button>
    </div>
  );
}

export default Toolbar;
