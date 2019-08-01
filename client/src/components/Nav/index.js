import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h5>Google Books</h5>
      <span><a href="/search">Search</a></span>
      <span><a href="/saved">Saved</a></span>
    </nav>
  );
}

export default Nav;
