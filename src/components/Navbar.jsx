import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-primary bg-primary sticky-top">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white active">
            HMPS ILKOM
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link transform" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profil
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/profile"} className="dropdown-item" title="profil">
                      visi, Misi dan Sejarah
                    </Link>
                  </li>

                  <li>
                    <Link to={"/profile"} className="dropdown-item">
                      Struktur Organisasi
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Galeri
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/gallery"} className="dropdown-item">
                      Galeri foto & video
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"/kemahasiswaan"} className="nav-link" aria-current="page" href="kemahasiswaan.html">
                  Kemahasiswaan
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hubungi Kami
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"https://www.facebook.com/profile.php?id=100080150585746"} target="blank" className="dropdown-item">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://instagram.com/hmps.ilkom.buteng?igshid=ZDdkNTZiNTM="} target="blank" className="dropdown-item">
                      Instagram
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="search-box d-flex" role="search">
              <input className="w-100 ms-3 me-2" type="search" placeholder="Search" aria-label="Search" />
              <a title="ini">
                <i className="text-dark mt-2 me-3 fa-sharp fa-solid fa-magnifying-glass"></i>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
