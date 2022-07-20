import React, { useState } from "react";
import { about } from "../data/dummydata";
import { Heading } from "../common/Heading";
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";

export const About = () => {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val, i) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="..." />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="Ludobójstwo dokonane przez nacjonalistów ukraińskich" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button onClick={() => Toggle()}>Więcej</button>
                <button className="primaryBtn" onClick={() => Toggle1()}>
                  Czytaj
                </button>
              </div>
              <Modal show={modal} close={Toggle} title="Tło wydarzeń">
                <p>
                  W marcu i kwietniu 1943 nastąpiła na Wołyniu masowa dezercja
                  policjantów Ukraińskiej Policji Pomocniczej. Część dezerterów
                  zasiliła oddziały OUN-B, OUN-M i UPA. Dezerterujący policjanci
                  dopuszczali się zbrodni na wybranych Polakach. Akcja ta nosiła
                  znamiona realizacji postanowień OUN-B o rozpoczęciu walki
                  zbrojnej i planu usunięcia polskiej ludności Wołynia.
                </p>
                <p>
                  <em>pl.wikipedia.org/wiki</em>
                </p>
              </Modal>
              <Modal1
                show={modal1}
                close={Toggle1}
                title="Decyzja o eksterminacji Polaków"
              >
                <p>
                  Plany OUN podczas wojny i polityka narodowościowa, którą
                  zamierzał wprowadzić rząd Stećki, zakładały usunięcie Polaków
                  z Wołynia i Małopolski Wschodniej. Zamierzano przy tym wspomóc
                  się prowokowanymi wystąpieniami chłopskimi. Wobec inteligencji
                  miano zastosować tę samą politykę, którą wprowadzali w życie
                  Niemcy w ramach akcji <i>Intelligenzaktion</i>.
                </p>
                <p>
                  <em>pl.wikipedia.org/wiki</em>
                </p>
              </Modal1>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
