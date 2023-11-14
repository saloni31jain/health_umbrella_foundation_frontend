import React, { useEffect, useState } from 'react';
import './accupressure.css';
import axios from 'axios';

const Accupressure = () => {
  const [data,setData]=useState({
    pathy:'',
    text:'',
    informationSource:[]
});

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://backend.healthumbrella.org:8000/disease/migraine/acupressure');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
},[]);


  return (
    <div className='accupressure-main'>
      <div className='accupressure-nav'>&lt; Migraine / Accupressure</div>
      <div className='accupressure-container'>
        <img src="./Images/green_ring_tl.png" className="greenring-tl" />
        <h1 className="accupressure-heading">ACUPRESSURE</h1>
        <h3 className="accupressure-subheading">THERAPY</h3>
        <div className="accupressure-content">{data.text}</div>
        <div className="accupressure-cards">
            <div className="item">
              <img src="./Images/man.png" alt="" />
              <div className="accupressure-cards-desc">Direct Cases</div>
            </div>
            <div className="item">
              <img src="./Images/youtube-logo.png" alt="" />
              <div className="accupressure-cards-desc">Youtube</div>
            </div>
            <div className="item">
              <img src="./Images/globe-icon.png" alt="" />
              <div className="accupressure-cards-desc">Website</div>
            </div>
            <div className="item">
              <img src="./Images/socialmedia-women.png" alt="" />
              <div className="accupressure-cards-desc">SocialMedia</div>
            </div>
            <div className="item">
              <img src="./Images/books.png" alt="" />
              <div className="accupressure-cards-desc">Books/Book Chapters</div>
            </div>
            <div className="item">
              <img src="./Images/articles-search.png" alt="" />
              <div className="accupressure-cards-desc">Articles</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accupressure;
