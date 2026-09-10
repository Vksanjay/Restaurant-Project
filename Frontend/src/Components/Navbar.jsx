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
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link fon1" href="#home"  data-bs-toggle="collapse"
        data-bs-target="#navbarNav">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fon1" href="#about"  data-bs-toggle="collapse"
        data-bs-target="#navbarNav">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fon1" href="#viewmenu"  data-bs-toggle="collapse"
        data-bs-target="#navbarNav">View Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fon1" href="#gallery"  data-bs-toggle="collapse"
        data-bs-target="#navbarNav">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fon1" href="#contact"  data-bs-toggle="collapse"
        data-bs-target="#navbarNav">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>    
        </>
    )
}
export default Navbar;