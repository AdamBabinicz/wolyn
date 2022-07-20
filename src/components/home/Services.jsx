import React from "react";
import { Heading } from "../common/Heading";
import { services } from "../data/dummydata";

export const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <Heading title="Zbrodniarze" />
          <div className="content grid3">
            {services.map((item) => (
              <div className="box" data-aos="flip-left">
                <img src={item.icon} alt="..." />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// https://histmag.org/Rzez-wolynska-skad-to-okrucienstwo-14222
// https://polskieradio24.pl/39/156/Artykul/2317488,Zbrodnia-UPA-w-Hurbach-W-bestialski-sposob-zginelo-250-osob
// https://przystanekhistoria.pl/pa2/tematy/oun-upa/35083,Wolynski-konflikt-pamieci.html

// Wśród inspiratorów akcji wymienia się chociażby Romana Szuchewycza, Petro Olijnyka, Dmytro Klaczkiwskiego, Wasyla Iwachowa i Iwana Łytwynczuka.

// Gdy w sercu człowieka nie ma Boga jest maszyną do zabijania

// https://www.youtube.com/watch?v=KDK2AVGobdA&t=189s

// „Pamiętaj Lasze, że do Wisły to nasze”
