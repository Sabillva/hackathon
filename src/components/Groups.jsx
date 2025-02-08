import React, { useState } from "react";

const Groups = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [ecoActivity, setEcoActivity] = useState("");
  const [groups, setGroups] = useState([
    {
      name: "Green Group",
      type: "Tree Planting",
      members: 10,
      totalPoints: 350,
      description: "Group involved in tree planting projects.",
    },
    {
      name: "Waste Recycling",
      type: "Waste Recycling",
      members: 5,
      totalPoints: 250,
      description: "Activities related to waste recycling.",
    },
  ]);

  const handleCreateGroup = () => {
    setGroups([
      ...groups,
      {
        name: groupName,
        type: ecoActivity,
        members: 1,
        totalPoints: 0,
        description: groupDescription,
      },
    ]);
    setModalOpen(false);
    setGroupName("");
    setGroupDescription("");
    setEcoActivity("");
  };

  return (
    <div className="groups-container">
      <h1 className="section-title">Groups</h1>

      <div className="create-group-container">
        <button
          className="create-group-button"
          onClick={() => setModalOpen(true)}
        >
          Create Group
        </button>
      </div>

      {modalOpen && (
        <div className="create-group-modal">
          <div>
            <h2>Create New Group</h2>
            <input
              type="text"
              className="modal-input"
              placeholder="Group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
            <textarea
              className="modal-input"
              placeholder="Group description"
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
            />
            <select
              className="modal-input"
              value={ecoActivity}
              onChange={(e) => setEcoActivity(e.target.value)}
            >
              <option value="">Select eco activity</option>
              <option value="Tree Planting">Tree Planting</option>
              <option value="Waste Recycling">Waste Recycling</option>
              <option value="Bicycle Usage">Bicycle Usage</option>
              <option value="Water Conservation">Water Conservation</option>
            </select>
            <button className="create-group-submit" onClick={handleCreateGroup}>
              Create
            </button>
            <button
              className="create-group-close"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="groups-list">
        {groups.map((group, index) => (
          <div key={index} className="group-card">
            <h3 className="group-name">{group.name}</h3>
            <p className="group-description">{group.description}</p>
            <p className="group-type">Eco activity: {group.type}</p>
            <p className="group-members">
              {group.members} members, Total points: {group.totalPoints}
            </p>
            <button className="join-group-button">Join Group</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
