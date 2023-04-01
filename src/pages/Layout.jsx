import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <div className="column">
        <main>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
