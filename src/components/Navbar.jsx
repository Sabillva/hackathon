import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

function Navbar({ navigate }) {
  return (
    <nav className="navbar">
      <button onClick={() => navigate('home')}>Home</button>
      <button onClick={() => navigate('tasks')}>Tasks</button>
      <button onClick={() => navigate('groups')}>Groups</button>
      <button onClick={() => navigate('leaderboard')}>Leaderboard</button>
      <button onClick={() => navigate('profile')}>Profile</button>
    </nav>
  );
}

export default Navbar;

