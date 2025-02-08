import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import User from "../assets/user.jpg";


const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const chartData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Points",
        data: [30, 50, 40, 70, 60, 90, 100],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
        <button className="settings-icon" onClick={handleModalToggle}>
          ⚙️
        </button>
      </div>

      <div className="profile-details">
        <div className="profile-header">
          <div className="profile-image">
            <img src={User} alt="user" />
          </div>
          <div className="profile-info">
            <h2>John Doe</h2>
            <div className="profile-stats">
              <p>Points: 500</p>
              <p>Address Count: 3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-buttons">
        <button className="tab-button" onClick={() => setActiveTab("overview")}>
          General Overview
        </button>
        <button className="tab-button" onClick={() => setActiveTab("activity")}>
          Recent Activities
        </button>
      </div>

      {activeTab === "overview" && (
        <div className="overview">
          <div className="chart-container">
            <Line data={chartData} />
          </div>

          <div className="addresses">
            <h3>Addresses</h3>
            <ul>
              <li>
                <span>🌳 Tree Planter</span>
              </li>
              <li>
                <span>💧 Water Conservator</span>
              </li>
              <li>
                <span>♻️ Recycling Expert</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === "activity" && (
        <div className="activity">
          <h3>Recent Activities</h3>
          <ul>
            <li>
              <p>Planted a tree - 2023-06-15</p>
              <p>+80 points</p>
            </li>
            <li>
              <p>Recycled waste - 2023-06-14</p>
              <p>+50 points</p>
            </li>
            <li>
              <p>Rode a bicycle - 2023-06-13</p>
              <p>+40 points</p>
            </li>
            <li>
              <p>Attended an ecological seminar - 2023-06-12</p>
              <p>+70 points</p>
            </li>
          </ul>
        </div>
      )}

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Profile</h2>
            <form>
              <label>Name</label>
              <input type="text" name="name" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Password</label>
              <input type="password" name="password" />
            </form>
            <button className="logout-button">Log Out</button>
            <button className="delete-account-button">Delete My Account</button>
            <button className="close-button" onClick={handleModalToggle}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
