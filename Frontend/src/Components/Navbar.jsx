function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg text-white navba">
  <div className="container-fluid">
    <span className="navbar-brand fw-bold logo">
          🍴 Food Heaven
        </span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link fon1" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fon1" href="#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fon1" href="#viewmenu">View Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fon1" href="#gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fon1" href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>    
        </>
    )
}
export default Navbar;