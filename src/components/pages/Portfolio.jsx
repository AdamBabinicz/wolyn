import React, { useState } from "react";
import { portfolio } from "../data/dummydata";
import { Heading } from "../common/Heading";
import Visibility from "@mui/icons-material/Visibility";

const allCategory = [
  "wszystkie",
  ...new Set(portfolio.map((item) => item.category)),
];

export const Portfolio = () => {
  const [list, setLists] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);

  console.log(setCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setLists(newItems);

    if (category === "wszystkie") {
      setLists(portfolio);
    }
  };

  return (
    <>
      <article>
        <div className="container">
          <Heading title="362 metody tortur i&nbsp;śmierci zadawanych Polakom przez OUN-UPA" />
          <div className="catButton">
            {category.map((category) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="content grid3">
            {list.map((item) => (
              <div className="box" data-aos="fade-up">
                <div className="img">
                  <img src={item.cover} alt="..." />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
