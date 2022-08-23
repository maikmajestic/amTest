import React from 'react';

// eslint-disable-next-line react/prop-types
const Selections = ({ setType }) => {
  return (
    <div className="box-between mt-2">
      <div>
        <button className="btn btn-primary" onClick={() => setType('students')}>Estudiantes</button>
      </div>
      <div><button className="btn btn-primary" onClick={() => setType('staff')}>Staff</button></div>
    </div>
  );
};

export default Selections;