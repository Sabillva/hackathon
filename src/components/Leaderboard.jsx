import React, { useState } from "react";
import Cup1 from "../assets/gold-cup.png";
import Cup2 from "../assets/silver-cup.png";
import Cup3 from "../assets/bronze-cup.png";

const Leaderboard = () => {
  const [isIndividual, setIsIndividual] = useState(true);

  const individualData = [
    {
      id: 1,
      name: "John Doe",
      points: 450,
      positionChange: 3,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      points: 370,
      positionChange: -1,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Mark Wilson",
      points: 350,
      positionChange: 2,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const groupData = [
    {
      id: 1,
      name: "Green Team",
      points: 1200,
      positionChange: 2,
      members: 10,
    },
    {
      id: 2,
      name: "Recycling Heroes",
      points: 1300,
      positionChange: -1,
      members: 8,
    },
    {
      id: 3,
      name: "Water Conservation",
      points: 1400,
      positionChange: 0,
      members: 12,
    },
  ];

  const renderIndividualLeaderboard = () => (
    <div className="leaderboard-list">
      {individualData.map((user, index) => (
        <div className="leaderboard-item" key={user.id}>
          <div className="position">{index + 1}</div>
          {index === 0 && (
            <div className="award-icons">
              <img className="gold" src={Cup1} alt="Gold" />
            </div>
          )}
          {index === 1 && (
            <div className="award-icons">
              <img className="silver" src={Cup2} alt="Silver" />
            </div>
          )}
          {index === 2 && (
            <div className="award-icons">
              <img className="bronze" src={Cup3} alt="Bronze" />
            </div>
          )}
          <img
            className="leaderboard-item-img"
            src={user.image}
            alt={user.name}
          />
          <div className="leaderboard-item-details">
            <div className="leaderboard-item-name">{user.name}</div>
            <div className="leaderboard-item-points">Points: {user.points}</div>
            <div
              className={`points-changed ${
                user.positionChange > 0
                  ? "up"
                  : user.positionChange < 0
                  ? "down"
                  : "no-change"
              }`}
            >
              {user.positionChange > 0
                ? `↑ ${user.positionChange} position(s)`
                : user.positionChange < 0
                ? `↓ ${Math.abs(user.positionChange)} position(s)`
                : "No position change"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGroupLeaderboard = () => (
    <div className="leaderboard-list">
      {groupData.map((group, index) => (
        <div className="leaderboard-item" key={group.id}>
          <div className="position">{index + 1}</div>
          {index === 0 && <div className="award-icons"></div>}
          {index === 1 && <div className="award-icons"></div>}
          {index === 2 && <div className="award-icons"></div>}
          <div className="leaderboard-item-details">
            <div className="leaderboard-item-name">{group.name}</div>
            <div className="leaderboard-item-points">
              Points: {group.points}
            </div>
            <div
              className={`points-changed ${
                group.positionChange > 0
                  ? "up"
                  : group.positionChange < 0
                  ? "down"
                  : "no-change"
              }`}
            >
              {group.positionChange > 0
                ? `↑ ${group.positionChange} position(s)`
                : group.positionChange < 0
                ? `↓ ${Math.abs(group.positionChange)} position(s)`
                : "No position change"}
            </div>
            <div className="leaderboard-item-points">
              {group.members} members
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>

      <div className="switch-buttons">
        <button onClick={() => setIsIndividual(true)}>Individuals</button>
        <button onClick={() => setIsIndividual(false)}>Groups</button>
      </div>

      {isIndividual ? renderIndividualLeaderboard() : renderGroupLeaderboard()}
    </div>
  );
};

export default Leaderboard;
