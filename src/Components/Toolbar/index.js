import React, { useState, useEffect }from 'react';
import { FaBookmark, FaUserPlus, FaTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { bookmarking } from '../../Services';

// eslint-disable-next-line react/prop-types
function Toolbar({ setShowModal, setIsLoading }) {
  const { bookmarks }  = useSelector(state => state.Characters);
  const [display, setDisplay] = useState(false);
  const [bookmarkList, setBookmarkList] = useState([]);

  useEffect(() => {
    const getData = () => {
      setBookmarkList(bookmarks);
    };
    
    getData();
    
  }, [bookmarks]);

  const handleBookmark = async (character) => {
    setIsLoading(true);
    const addingFav = await bookmarking(character);
    addingFav.status === 200 ? '' : console.log('');
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <div className={`toolbar-content ${!display ? 'display-none' : ''}`}>
        {bookmarkList.length === 0 && (
          <div className="toolbar-item">
            <span>Sin elementos</span>
          </div>
        )}
        {bookmarkList.map((item) => {
          return (
            <div className="toolbar-item" key={item.id}>
              <img src={item.image}/>
              <span>{item.name}</span>
              <button className="btn btn-action btn-remove" onClick={() => handleBookmark(item)}><FaTrashAlt/></button>
            </div>
          );
        })}
      </div>
      <div className="box-actions">
        <button className="btn-action btn-fav" onClick={() => setDisplay(display ? false : true)}>Favoritos <span><FaBookmark/></span></button>
        <button className="btn-action btn-add" onClick={() => setShowModal(true)}>Agregar <FaUserPlus/></button>
      </div>
    </>
  );
}

export default Toolbar;
