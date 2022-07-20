import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { home } from "../data/dummydata";
import Modal from "../Portal/Modal";

export const Hero = () => {
  const [click, setClick] = useState(false);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContent">
            <h3 className="fontSize" data-aos="fade-right">
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            <button
              className="primaryBtn"
              data-aos="fade-up-right"
              onClick={() => Toggle()}
            >
              Więcej
            </button>
          </div>
        ))}
      </section>
      <Modal show={modal} close={Toggle} title="Tło wydarzeń">
        <p>
          Tej taktyki masowych mordów Ukraińcy nauczyli się od Niemców. [...]
          Kampania przeciwko Polakom zaczęła się na Wołyniu, a nie w Galicji,
          prawdopodobnie właśnie dlatego, że tutaj policja ukraińska odegrała
          większą rolę w wydarzeniach Holokaustu. Łączy to zagładę Żydów z
          rzezią Polaków i wyjaśnia obecność na Wołyniu tysięcy doświadczonych w
          ludobójstwie Ukraińców.
        </p>
        <p>
          <em>pl.wikipedia.org/wiki/Rze%C5%BA_wo%C5%82y%C5%84ska</em>
        </p>
      </Modal>
    </>
  );
};
