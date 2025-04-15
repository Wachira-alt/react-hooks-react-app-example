// TestComponent.js
import React from "react";

export default function TestComponent() {
  return (
    <div className="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5TbUxGZtwGI"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="time video"
        allowFullScreen
      ></iframe>
    </div>
  );
}
