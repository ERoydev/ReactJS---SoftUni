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
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

