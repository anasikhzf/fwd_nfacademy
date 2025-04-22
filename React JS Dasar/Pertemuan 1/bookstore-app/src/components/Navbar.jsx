function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">
            <i className="fas fa-book text-primary me-2"></i> bookstore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              {['Home', 'Book', 'Team', 'Contact'].map((item) => (
                <li key={item} className="nav-item">
                  <a className="nav-link text-primary" href="#">{item}</a>
                </li>
              ))}
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-primary me-2">Login</button>
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar
  