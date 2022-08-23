import React, { useState, useEffect } from 'react';
import '../Styles/home/Home.min.css';
import logoLetters from '../Assets/Images/logos/harry.png';
import { FaRegBookmark, FaBookmark, FaUserPlus, FaCross } from 'react-icons/fa';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    const getData = (type) => {
      console.log(type);
      if(type !== 'staff') {
        axios.get('//localhost:8000/students').then((response) => {
          setData(response.data);
        });
      } else {
        axios.get('//localhost:8000/staff').then((response) => {
          setData(response.data);
        });
      }
    };
    
    getData(type);
    
  }, [type]);

  return (
    <div className="container home-container">
      <div className="box">
        <div className="box-actions">
          <button className="btn-action">Favoritos <span><FaBookmark/></span></button>
          <button className="btn-action btn-add">Agregar <FaUserPlus/></button>
        </div>
        <div className="box-centered mt-3">
          <img src={logoLetters} />
        </div>
        <div className="box-centered text-title text-white">
          Selecciona Filtro
        </div>
        <div className="box-between mt-2">
          <div>
            <button className="btn btn-primary" onClick={() => setType('students')}>Estudiantes</button>
          </div>
          <div><button className="btn btn-primary" onClick={() => setType('staff')}>Staff</button></div>
          
          
        </div>
      </div>
      <div className="box box-wrap mt-1">
        {data.map((character, index) => {
          return (
            <section className={`card ${!character.alive ? 'blurCard' : ''}`} key={index}>
              <div className={`box-photo ${character.house}`}>
                <div className="photo-card">
                  <img src={character.image}/>
                </div>
              </div>
              <div className="box-info">
                <div className="card-header">
                  <span className="title-card">{character.alive ? 'Vivo' : 'Muerto'}{character.hogwartsStudent ? ' / ' + 'Estudiante' : ' / ' + 'Maestro'}</span>
                  <button className="btn-bookmark"><FaRegBookmark/></button>
                </div>
                <h4 className="name-card">{!character.alive ? <FaCross/> : ''}{character.name}</h4>
                <div className="box-description">
                  <p className="description-card"><strong>Cumpleaños:</strong> {character.dateOfBirth}</p>
                  <p className="description-card"><strong>Género:</strong> {character.gender}</p>
                  <p className="description-card"><strong>Color de ojos:</strong> {character.eyeColour}</p>
                  <p className="description-card"><strong>Color de pelo:</strong> {character.hairColour}</p>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
