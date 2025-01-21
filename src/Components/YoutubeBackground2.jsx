import React from "react";
import "./YoutubeBackground2.css";

const YoutubeBackground2 = () => {
  return (
    <div className="youtube-background">
      <iframe
        src="https://youtu.be/b54xgHkWb1s?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=b54xgHkWb1s"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube Background"
      ></iframe>
    </div>
  );
};

export default YoutubeBackground2;
