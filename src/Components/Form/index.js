import React, { useState, useEffect } from 'react';
import { uploadImage, addCharacter } from '../../Services';

// eslint-disable-next-line react/prop-types
function Form({setShowModal}) {
  const [character, setCharacter] = useState({
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: '',
    hogwartsStudent: false,
    hogwartsStaff: false,
    image: '',
    house: '',
    alive: ''
  });
  const [isBlocked, setIsBlocked] = useState(true);
  const [isUploaded, setIsUploaded] = useState(false);

  const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  const handleInputs = (value, field) => {
    let payload = {...character};
    if(field === 'hogwartsStudent'){
      payload.hogwartsStudent = true;
      payload.hogwartsStaff = false;
    } else if(field === 'hogwartsStaff'){
      payload.hogwartsStudent = false;
      payload.hogwartsStaff = true;
    } else if(field === 'alive') {
      payload['alive'] = value === 'true' ? true : value !== '' ? false : '';
    } else {
      payload[field] = value;
    } 
    setCharacter(payload);
  };

  const handleForm = () => {
    addCharacter(character);
    setShowModal(false);
  };

  const handleImage = async (e) => {
    let file = e.target.files[0];
    let char = {...character};
    char.image = file.name;
    setCharacter(char);
    uploadImage(file);
    setTimeout(() => setIsUploaded(true), 1200);
  };

  useEffect(() => {
    const validation = () => {
      if(character.name !== '' && character.dateOfBirth !== '' && character.eyeColour !== '' && character.hairColour !== '' && character.gender !== '' && isUploaded && character.house !== '' && character.alive !== '' && (character.hogwartsStudent || character.hogwartsStaff)) {
        setIsBlocked(false);
      } else {
        setIsBlocked(true);
      }
    };

    validation();
  }, [character, isUploaded]);

  return (
    <>
      <div className="box box-wrap box-form">
        <section className="column">
          <label className="text-input">Nombre:</label>
          <input className="input-text mb-2" onChange={(e) => handleInputs(e.target.value, 'name')} value={character.name}/>
          <label className="text-input">Color de ojos:</label>
          <input className="input-text mb-2" onChange={(e) => handleInputs(e.target.value, 'eyeColour')} value={character.eyeColour}/>
          <label htmlFor="house" className="text-input">
            Casa:
          </label>
          <select
            name="house"
            className="input-select mb-2"
            onChange={(e) =>
              handleInputs(e.target.value, 'house')
            }
          >
            <option value=""></option>
            {houses.map((house, index) => {
              return (
                <option key={index} value={house}>{house}</option>
              );
            })}
          </select>
          <label className="text-input">Género:</label>
          <div className="box-between">
            <div className="input-radio">
              <input type="radio" id="male" value="male" checked={character.gender === 'male' ? true : false} onChange={(e) => handleInputs(e.target.value, 'gender')}/>
              <label className="text-radio" htmlFor="male">Hombre</label>
            </div>
            <div className="input-radio">
              <input type="radio"id="female" value="female" checked={character.gender === 'female' ? true : false} onChange={(e) => handleInputs(e.target.value, 'gender')}/>
              <label className="text-radio" htmlFor="female">Mujer</label>
            </div>
          </div>
        </section>
        <section className="column">
          <label className="text-input">Cumpleaños</label>
          <input type="date" className="input-text mb-2" onChange={(e) => handleInputs(e.target.value, 'dateOfBirth')} value={character.dateOfBirth}/>
          <label className="text-input">Color de pelo:</label>
          <input className="input-text mb-2" onChange={(e) => handleInputs(e.target.value, 'hairColour')} value={character.hairColour}/>
          <label htmlFor="alive" className="text-input">
            Vivo:
          </label>
          <select
            name="alive"
            className="input-select mb-2"
            onChange={(e) =>
              handleInputs(e.target.value, 'alive')
            }
          >
            <option value=""></option>
            <option value={true}>Si</option>
            <option value={false}>No</option>
          </select>
          <label className="text-input">Posición:</label>
          <div className="box-between">
            <div className="input-radio">
              <input type="radio" id="estudiante" value="estudiante" checked={character.hogwartsStudent} onChange={(e) => handleInputs(e.target.value, 'hogwartsStudent')}/>
              <label className="text-radio" htmlFor="estudiante">Estudiante</label>
            </div>
            <div className="input-radio">
              <input type="radio" id="maestro" value="maestro" checked={character.hogwartsStaff} onChange={(e) => handleInputs(e.target.value, 'hogwartsStaff')}/>
              <label className="text-radio" htmlFor="maestro">Staff</label>
            </div>
          </div>
        </section>
      </div>
      <div className="box-left mt-2">
        <label className="text-input">Fotografía:</label>
        <input type="file" onChange={handleImage} accept="image/png, image/jpeg, image/gif"/>
      </div>
      <div className="box-left mt-1">
        {!isUploaded && character.image && <label className="text-input">Subiendo fotografía</label>}
      </div>
      <div className="box-centered">
        <button className="btn-primary mt-3" onClick={handleForm} disabled={isBlocked}>Agregar</button>
      </div>
    </>
  );
}

export default Form;