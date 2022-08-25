import React, { useState, useEffect } from 'react';
import { FaBookmark, FaRegBookmark, FaCross } from 'react-icons/fa';
import { bookmarking } from '../../Services';
import dummyPhoto from '../../Assets/Images/Characters/images.jpeg';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Card = ({ data, setIsLoading }) => {
  const { bookmarks }  = useSelector(state => state.Characters);
  const [showAlert, setShowAlert] = useState(true);
  const [dat, setDat] = useState(data);

  useEffect(() => {
    setDat(data);
  }, [data]);

  const handleBookmark = async (character) => {
    if(!character.bookmarked && bookmarks.length >= 5) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setShowAlert(false);
      setTimeout(() => setShowAlert(true), 3000);
    } else{
      setIsLoading(true);
      const addingFav = await bookmarking(character);
      addingFav.status === 200 ? '' : '';
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <>
      <div className={`box-alert ${showAlert ? 'hidden' : ''}`}>
        <p className='text-midBig'><strong>Error! </strong>Solo puedes agregar máximo 5 personajes como favoritos.</p>
      </div>
      {dat.map((character) => {
        return (
          <section className={`card ${!character.alive ? 'blurCard' : ''}`} key={character.id}>
            <div className={`box-photo ${character.house}`}>
              <div className="photo-card">
                <img src={character.image !== '' ? character.image : dummyPhoto}/>
              </div>
            </div>
            <div className="box-info">
              <div className="card-header">
                <span className="title-card">{character.alive ? 'Vivo' : 'Muerto'}{character.hogwartsStudent ? ' / ' + 'Estudiante' : ' / ' + 'Maestro'}</span>
                <button className={`btn-bookmark ${character.bookmarked ? '--bookmarked' : ''}`} onClick={() => handleBookmark(character)}>{character.bookmarked ? <FaBookmark/> : <FaRegBookmark/>}</button>
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
