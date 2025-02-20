import React, { useState, useEffect } from "react";
import "../assets/css/worktimeline.css";

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
    <>
    <p className="subtitle ">I'm a <span className='underline-text'>Full-Stack Developer</span> passionate about building impactful applications.</p>
    <div className={`timeline-container ${animate ? "in-view" : ""}`}>
      <div className="timeline-line"></div>
    </div>

    <section className='container'>

      <div className="tile">
      <h3 class="year">📖 2024-'25</h3>
      <p> I am a student at Saint Mary's University pursuing a Masters's degree in Computing and Data Analytics. </p>
      </div>

      <div className="tile">
        <h3 class="year">👨‍💻 Honorable Mention Award, RBC HubHacks Hackathon (October '24)</h3>
        <p> Representing United Way Maritimes, we developed a real-time data portal, Power BI dashboard and
embedded it on our website. Our website collects housing projects data and public policy updates, empowering
to make data-driven decisions for the communities they serve. </p>
      </div>

      <div className="tile">
        <h3 class="year">📖 2020-'24</h3>
        <p> I am a student at Vellore University of Technology, Vellore, India. Pursuing a Bachelor's degree in Computer Science and Engineering with Specialization in Data Science. </p>
      </div>

      <div className="tile">
        <h3 class="year">👨‍💻 Project Associate at Department of Science and Technology, Govt. of India (Nov'23 to May'24)</h3>
        <p> Worked on a funded project—Development of Forewarning System for Landslides in the Nilgiris—as a
Software Engineer by setting up APIs and python visualisations to the server and deployed it for officials to
view and manage risk. </p>
      </div>
      

      <div className="tile">
        <h3 class="year">👨‍💻 Full-stack Developer Intern – CyberCycloid. (Oct '21 to Nov'21)</h3>
        <p> Developed an Ecommerce Website which provided a knowledge base and entry into Django web development
        that opened opportunities for many projects. </p>
      </div>
    </section>


    </>
  );
};

export default Timeline;
