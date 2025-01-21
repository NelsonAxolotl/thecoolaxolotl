import React from "react";
import "./YoutubeBackground.css";

const YoutubeBackground = () => {
  return (
    <div className="youtube-background">
      <iframe
        src="https://www.youtube.com/embed/HiWtuvLiTMs?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=HiWtuvLiTMs"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube Background"
      ></iframe>
    </div>
  );
};

export default YoutubeBackground;
