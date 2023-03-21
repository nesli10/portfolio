import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Menu mode="horizontal" className="navbar">
        <Menu.Item className="navbaritem">
          <Link className="navbarlink" to="/">
            ANASAYFA
          </Link>
        </Menu.Item>
        <Menu.Item className="navbaritem">
          <Link className="navbarlink" to="/deneyim">
            DENEYİMLER
          </Link>
        </Menu.Item>
        <Menu.Item className="navbaritem">
          <Link className="navbarlink" to="/proje">
            PROJELER
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
