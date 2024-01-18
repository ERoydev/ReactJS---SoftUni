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
        <div className="caption">
          <h6>Looking for a Job</h6>
            <h2>Find the perfect <em>Job</em></h2>
          <button className='main-button'>Search for a Job</button>
        </div>
      </div>
    </div>
  );
};

