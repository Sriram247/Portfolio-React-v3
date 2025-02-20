import React, { useState, useEffect } from "react";
import "../assets/css/timeline.css";

const Timeline = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const timelineElement = document.querySelector(".timeline-container");
      if (timelineElement) {
        const rect = timelineElement.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`timeline-container ${animate ? "in-view" : ""}`}>
      <div className="timeline-line"></div>
    </div>
  );
};

export default Timeline;
