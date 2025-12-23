function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <img src="src/logos/logo.png" alt="Home" />
      </a>
      <div className="nav-center">
      <div className="nav-item">About Us</div>
      <div className="nav-item">Our Team</div>
      <div className="nav-item">Sponsors</div>
      <div className="nav-item">Rulebook</div>
      <div className="nav-item">Gallery</div>
      <div className="nav-item">Register</div>
      </div>
    </nav>
  );
}

export default Navbar;

