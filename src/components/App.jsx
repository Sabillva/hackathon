import "../fonts/Ravio-Regular.ttf";
import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Tasks from "./Tasks.jsx";
import Groups from "./Groups.jsx";
import LeaderBoard from "./Leaderboard.jsx";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = (page) => {
    switch (page) {
      case "home":
        return <Home />;
      case "tasks":
        return <Tasks />;
      case "groups":
        return <Groups />;
      case "leaderboard":
        return <LeaderBoard />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar navigate={navigate} />
      <div className="content">
        {renderPage(currentPage)}
      </div>
    </div>
  );
}

export default App;
