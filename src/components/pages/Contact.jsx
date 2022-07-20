import React from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";
import img from "../../assets/50.jpg";

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Kontakt" />
          <div className="content flexsb">
            <div className="right">
              <img src={img} alt="..." />
              {/* <form>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Imię i Nazwisko"
                    data-aos="flip-left"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    data-aos="flip-right"
                  />
                </div>
                <input type="text" placeholder="Temat" data-aos="flip-up" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Wiadomość"
                  data-aos="flip-down"
                ></textarea>
                <button data-aos="zoom-in-up">Wyślij</button>
              </form> */}
            </div>
            <div className="left">
              {contact.map((item) => (
                <div className="box" data-aos="zoom-in">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
