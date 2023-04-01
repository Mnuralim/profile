import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid bg-primary mt-5">
        <div className="container justify-content-center text-center">
          <div className="row">
            <div className="navbar-brand text-white fw-bold p-4">
              <p className="fw-normal mt-2">By Hmps ilkom usn buteng 2023</p>
              <Link to={"https://www.facebook.com/profile.php?id=100080150585746"} target="blank" className="fontawesome" title="facebook">
                <i className="fa-2x fa-brands fa-facebook"></i>
              </Link>
              <Link to={"https://instagram.com/hmps.ilkom.buteng?igshid=ZDdkNTZiNTM="} target="blank" className="fontawesome" title="instagram">
                <i className="fa-2x fa-brands fa-instagram"></i>
              </Link>

              <Link to={"https://youtube.com/@ilmukomputer6755"} className="fontawesome" title="youtube">
                <i className="fa-2x fa-brands fa-youtube"></i>
              </Link>
            </div>
            <ul className="hover">
              <li className="d-inline-block">
                <Link to={"/"} className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="d-inline-block">
                <Link to={"/profile"} className="text-decoration-none">
                  Profil
                </Link>
              </li>
              <li className="d-inline-block">
                <Link to={"/gallery"} className="text-decoration-none">
                  Galeri
                </Link>
              </li>
              <li className="d-inline-block">
                <Link to={"/kemahasiswaan"} className="text-decoration-none">
                  kemahasiswaan
                </Link>
              </li>
            </ul>
            <div className="text-white pt-2 border-top">
              <p>Copyright&copy;2023. Hmps ilkom</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
