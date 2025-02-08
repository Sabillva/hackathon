import React, { useState, useEffect } from "react";
const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">EcoGo</h2>

      {/* Top Leaders Section */}
      <section className="top-leaders">
        <h3 className="section-title">Top Leaders</h3>
        <div className="leader-circles">
          <div className="leader">
            <div className="leader-img"></div>
            <p className="leader-name">John Doe</p>
            <p className="leader-score">Score: 1120</p>
          </div>
          <div className="leader">
            <div className="leader-img"></div>
            <p className="leader-name">Jane Smith</p>
            <p className="leader-score">Score: 1110</p>
          </div>
          <div className="leader">
            <div className="leader-img"></div>
            <p className="leader-name">Alex Johnson</p>
            <p className="leader-score">Score: 1000</p>
          </div>
        </div>
      </section>

      {/* Daily Task Progress Section */}
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

      {/* Points Balance Section */}
      <section className="points-balance">
        <h3 className="section-title">Points Balance</h3>
        <div className="balance-details">
          <p className="total-points">Total Points: 750</p>
          <p className="points-changed">+50 points</p>
          <p className="date">Today</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
