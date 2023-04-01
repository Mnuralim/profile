import React from "react";

const Header = () => {
  return (
    <div>
      <header className="gambarusn">
        <nav>
          <div className="container-fluid justify-content-center">
            <div className="row">
              <div className="col-sm-12 d-flex">
                <div>
                  <a className="navbar-brand fs-lg-4 fs-sm-2" href="#">
                    <img src="/asset/logokecil.jpg" alt="Logo" width="70" height="70" className="mt-3 mb-3 me-2 rounded-circle" />
                  </a>
                </div>
                <div className="logo mt-4 border-start border-3 border-primary mb-3 justify-content-center ps-2">
                  <p>
                    SELAMAT DATANG DI HMPS <br />
                    <span>ILMU KOMPUTER USN BUTENG</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
