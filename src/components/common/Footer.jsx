import React from "react";
import { social } from "../data/dummydata";

export const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <i data-aos="zoom-in">{item.icon}</i>
            </a>
          </>
        ))}
        <p data-aos="zoom-in">Radom, 2022 - {new Date().getFullYear()}.</p>
      </footer>
    </>
  );
};
