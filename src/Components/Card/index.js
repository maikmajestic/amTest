import React, { useState, useEffect } from 'react';
import { FaBookmark, FaRegBookmark, FaCross } from 'react-icons/fa';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
  const [dat, setDat] = useState(data);

  useEffect(() => {
    setDat(data);
  }, [data]);

  const handleBookmark = (payload, id) => {
    payload.bookmarked = true;
    axios.put(`//localhost:8000/students/${id}`, payload).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
      {dat.map((character, index) => {
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
                <button className={`btn-bookmark ${character.bookmarked ? '--bookmarked' : ''}`} onClick={() => handleBookmark(character, index)}>{character.bookmarked ? <FaBookmark/> : <FaRegBookmark/>}</button>
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
    </>
  );
};

export default Card;
