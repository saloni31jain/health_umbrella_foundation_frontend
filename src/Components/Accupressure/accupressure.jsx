import React from 'react';
import './accupressure.css';

const Accupressure = () => {
  return (
    <div className='accupressure-main'>
      <div className='accupressure-nav'>&lt; Migraine / Accupressure</div>
      <div className='accupressure-container'>
        <img src="./Images/green_ring_tl.png" className="greenring-tl" />
        <h1 className="accupressure-heading">ACUPRESSURE</h1>
        <h3 className="accupressure-subheading">THERAPY</h3>
        <div className="accupressure-content">Discover life-altering testimonials showcasing our effective migraine solutions. From various sources like YouTube, Quora, social media, direct feedback, doctors' clinics, books, and articles, these authentic accounts offer valuable insights. Gain inspiration and validation through the transformative journeys of migraine sufferers who found relief with us. Experience the positive impact of our solutions firsthand. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa labore dolor! Nobis, aliquid ex nam sequi quod delectus corporis, dolor officia optio obcaecati ullam eveniet quas alias error blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio, voluptas, ratione illo unde libero tempore corrupti recusandae ipsam sunt alias quo quis sapiente dolores deserunt doloribus consequatur voluptatibus. Nemo.</div>
        <div className="accupressure-cards">
            <div className="item 1">
              <img src="./Images/man.png" alt="" />
              <div className="accupressure-cards-desc">Direct Cases</div>
            </div>
            <div className="item 2">
              <img src="./Images/youtube-logo.png" alt="" />
              <div className="accupressure-cards-desc">Youtube</div>
            </div>
            <div className="item 3">
              <img src="./Images/globe-icon.png" alt="" />
              <div className="accupressure-cards-desc">Website</div>
            </div>
            <div className="item 4">
              <img src="./Images/socialmedia-women.png" alt="" />
              <div className="accupressure-cards-desc">SocialMedia</div>
            </div>
            <div className="item 5">
              <img src="./Images/books.png" alt="" />
              <div className="accupressure-cards-desc">Books/Book Chapters</div>
            </div>
            <div className="item 6">
              <img src="./Images/articles-search.png" alt="" />
              <div className="accupressure-cards-desc">Articles</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accupressure;
