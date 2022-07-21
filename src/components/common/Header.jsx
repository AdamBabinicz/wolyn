import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navlink } from "../data/dummydata";
import logo from "../../assets/3.png";
import { Menu } from "@mui/icons-material";

export const Header = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="..." data-aos="zoom-in-right" />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <Link
                to={links.url}
                key={i}
                data-aos="zoom-in-left"
                onClick={() => setResponsive(!responsive)}
                className="link"
              >
                {links.text}
              </Link>
            ))}
          </div>
          <div className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu className="icon" />
          </div>
        </div>
      </header>
    </>
  );
};
