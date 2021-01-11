import React from "react";

function App(props) { 
  return ( 
    <div className={`hero ${props.className || ""}`}>
      <div className="hero-container"></div>
      <img
        className="shape-circle"
        src="https://anima-uploads.s3.amazonaws.com/projects/5f8e220bdff56f27ee5b7cc7/releases/5f9082de53033dac763b4b6c/img/desktop-hd-learn-path-2-DC8E0494-121C-40B1-8AE1-3C8BEAC833A7.png"
      />
      <img
        className="shape-triangle"
        src="https://anima-uploads.s3.amazonaws.com/projects/5f8e220bdff56f27ee5b7cc7/releases/5f9082de53033dac763b4b6c/img/desktop-hd-home-triangle2x-BA81FE1D-AE06-47A2-91D5-20EC51D5F0F8.png"
      />
      <img
        className="shape-dots"
        src="https://anima-uploads.s3.amazonaws.com/projects/5f8e220bdff56f27ee5b7cc7/releases/5f9082de53033dac763b4b6c/img/desktop-hd-home-rectangle2x-4EFFE4A8-CAD1-47C7-A175-D3256F2E5124.png"
      />
      <div className="video">
        <iframe
         
          id="ytplayer"
          type="text/html"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/rk71kS4cY7E?rel=0"
       

        ></iframe>
      </div>
    </div>
  ); 
}

export default App; 