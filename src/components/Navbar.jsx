function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__content">
        <h2 className="navbar__logo">CineVault</h2>

        <ul className="navbar__links">
          <li>Home</li>
          <li>Movies</li>
          <li>Search</li>
        </ul>

        <button className="btn btn--primary navbar__button">Sign In</button>
      </nav>
    </header>
  )
}

export default Navbar