import React from 'react';
import mainVideo from '../assets/video/mainPage.mp4' // Import your video
import '../static/Video.css'; // Import your CSS file for styling

export default function VideoComponent () {
  return (
    <div className="videoContainer">
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src={mainVideo} type="video/mp4" />
      </video>

       <div className="overlay">
        <div className="textContainer">
          <h2>Looking for a Job? We've Made It Easier for You.</h2>
          <p>Jobs Available in Every Region of Our Country</p>
          <button className='search'>Search for a Job</button>
        </div>
      </div>
    </div>
  );
};

