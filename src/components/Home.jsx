import React, { useState, useEffect } from "react";
import Leader1 from "../assets/leader1.png";
import Leader2 from "../assets/leader2.png";
import Leader3 from "../assets/leader3.png";
import Ecogo from "../assets/ecogo.png";

const Home = () => {
  return (
    <div className="home-container">
        <img className="logo" src={Ecogo} alt="logo" />
      <section className="top-leaders">
        <h3 className="section-title">Top Leaders</h3>
        <div className="leader-circles">
          <div className="leader">
            <div className="leader-img">
              <img src={Leader1} alt="leader" />
            </div>
            <p className="leader-name">John Doe</p>
            <p className="leader-score">Score: 1120</p>
          </div>
          <div className="leader">
            <div className="leader-img"><img src={Leader2} alt="second" /></div>
            <p className="leader-name">Mike Smith</p>
            <p className="leader-score">Score: 1110</p>
          </div>
          <div className="leader">
            <div className="leader-img"><img src={Leader3} alt="third" /></div>
            <p className="leader-name">Jane Brown</p>
            <p className="leader-score">Score: 1000</p>
          </div>
        </div>
      </section>

      <section className="daily-task-progress">
        <h3 className="section-title">Monthly Tasks Progress</h3>
        <div className="task-progress">
          <p className="task-progress-text">Completed 12/30 tasks</p>
          <div className="progress-bar">
            <div className="filled-bar" style={{ width: "40%" }}></div>
          </div>
          <p className="task-progress-percent">40% completed</p>
        </div>
      </section>

      <section className="points-balance">
        <h3 className="section-title">Points Balance</h3>
        <div className="balance-details">
          <div>
            <p className="total-points-num">750</p>
            <p className="total-points">Total Points</p>
          </div>
          <div className="grid-section-2">
            <p className="points-changed">+50 points</p>
            <p className="date">Today</p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
