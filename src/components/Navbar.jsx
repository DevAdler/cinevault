function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__content">
        <h2 className="navbar__logo">CineVault</h2>

        <nav className="navbar__navigation" aria-label="Main navigation">
          <ul className="navbar__links">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Movies</a>
            </li>

            <li>
              <a href="#">Search</a>
            </li>
          </ul>
        </nav>

        <div className="navbar__actions">
          <button className="btn btn--primary" type="button">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;