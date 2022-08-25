import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import Form from '../Form';

// eslint-disable-next-line react/prop-types
function Modal({ showModal, setShowModal }) {
  return (
    <div className={`box-centered box-modal ${showModal ? 'show-modal' : 'hide-modal'}`}>
      <div className="modal-content box">
        <div className="box-between modal-info">
          <h3>Agrega un usuario</h3>
          <span className="close-modal" onClick={() => setShowModal(false)}><FaRegTimesCircle/></span>
        </div>
        <Form setShowModal={setShowModal}/>
      </div>
    </div>
  );
}

export default Modal;