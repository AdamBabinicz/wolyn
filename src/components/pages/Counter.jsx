import React from "react";
import { project } from "../data/dummydata";
import CountUp from "react-countup";

export const Counter = () => {
  return (
    <>
      <div className="hero counter">
        <div className="container grid2 grid3 grid4">
          {project.map((item) => (
            <div className="box" data-aos="zoom-in">
              {/* <img src={item.icon} alt="..." /> */}
              <i>{item.icon}</i>
              <h2 className="heading">
                <CountUp enableScrollSpy duration={2} end={item.num} />
                &nbsp;tys.
              </h2>
              zamordowanych
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// https://ipn.gov.pl/pl/aktualnosci/40934,Ludobojstwo-OUN-B-i-UPA-na-Polakach.html
