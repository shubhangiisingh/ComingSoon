import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="fullscreen">
      <video className="fullscreen-video desktop-video" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + '/video.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="fullscreen-video smartphone-video" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + '/pvideo.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
