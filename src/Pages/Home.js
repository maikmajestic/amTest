import React, { useState, useEffect } from 'react';
import '../Styles/home/Home.min.css';
import axios from 'axios';
import Toolbar from '../Components/Toolbar';
import Header from '../Components/Header';
import Selections from '../Components/Selections';
import Card from '../Components/Card';

function Home() {
  const [data, setData] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    const getData = (type) => {
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
        <Toolbar/>
        <Header/>
        <Selections setType={setType}/>
      </div>
      <div className="box box-wrap mt-1">
        <Card data={data}/>
      </div>
    </div>
  );
}

export default Home;
