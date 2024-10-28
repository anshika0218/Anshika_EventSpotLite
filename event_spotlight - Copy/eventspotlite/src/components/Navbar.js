import React from 'react';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <h1>EventSpot Lite</h1>
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
