import React from 'react';
import Switch from '../components/Switch';
import WorkTimeline from '../components/WorkTimeline';
import "../assets/css/home.css";



function  Home() {
  return (
    <>
    <section className="home">
      <h1 className="title">Hello I'm Sriram!</h1>
      <Switch/>
      <WorkTimeline />  

   

    </section>
    </>
  );
}

export default Home;
