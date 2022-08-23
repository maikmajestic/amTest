import React, { useState }from 'react';
import { FaBookmark, FaUserPlus, FaTrashAlt } from 'react-icons/fa';

function Toolbar() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div className={`toolbar-content ${!display ? 'display-none' : ''}`}>
        <div className="toolbar-item">
          <img src="http://hp-api.herokuapp.com/images/harry.jpg"/>
          <span>name</span>
          <button className="btn btn-action btn-remove"><FaTrashAlt/></button>
        </div>
        <div className="toolbar-item">
          <img src="http://hp-api.herokuapp.com/images/harry.jpg"/>
          <span>name</span>
          <button className="btn-action btn-remove"><FaTrashAlt/></button>
        </div>
      </div>
      <div className="box-actions">
        <button className="btn-action btn-fav" onClick={() => setDisplay(display ? false : true)}>Favoritos <span><FaBookmark/></span></button>
        <button className="btn-action btn-add">Agregar <FaUserPlus/></button>
      </div>
    </>
  );
}

export default Toolbar;
