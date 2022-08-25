import React from 'react';

// eslint-disable-next-line react/prop-types
const Selections = ({ setFilter }) => {
  return (
    <div className="box-between mt-2">
      <div>
        <button className="btn btn-primary" onClick={() => setFilter('students')}>Estudiantes</button>
      </div>
      <div><button className="btn btn-primary" onClick={() => setFilter('staff')}>Staff</button></div>
    </div>
  );
};

export default Selections;