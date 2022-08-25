import React, { useState, useEffect } from 'react';
import Toolbar from '../Components/Toolbar';
import Header from '../Components/Header';
import Selections from '../Components/Selections';
import Card from '../Components/Card';
import Modal from '../Components/Modal';
import { getCharacters, getType } from '../Store/Slices/Characters';
import { useDispatch, useSelector } from 'react-redux';
import loader from '../Assets/Images/logos/harry-loading.gif';

function Home() {
  const dispatch = useDispatch();
  const { list, staff }  = useSelector(state => state.Characters);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [type, setType] = useState('students');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch, isLoading]);

  useEffect(() => {
    const getData = () => {
      type === 'students' ? setData(list) : setData(staff);
    };
    
    getData();
    
  }, [type, list, data, staff]);

  const handleLoader = (value) => {
    setIsLoading(value);
  };

  const handleModal = (value) => {
    setIsLoading(true);
    setShowModal(value);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleFilter = (filter) => {
    dispatch(getType(filter));
    setType(filter);
  };

  return (
    <div className="container home-container">
      <Modal showModal={showModal} setShowModal={handleModal}/>
      <div className="box">
        <Toolbar setShowModal={handleModal} setIsLoading={handleLoader}/>
        <Header/>
        <Selections setFilter={handleFilter}/>
      </div>
      {isLoading && (
        <>
          <img className="photo-loading" src={loader}/>
          <h3 className="text-white">Cargando...</h3>
        </>
      )}
      {!isLoading && (
        <div className="box box-wrap mt-1 mb-2">
          <Card data={data} setIsLoading={handleLoader}/>
        </div>
      )}
    </div>
  );
}

export default Home;
