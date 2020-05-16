import React, { useState } from "react";
import Title from "./Title";
import berlinImg from "../assets/Cities/berlin.jpg";
import budapestImg from "../assets/Cities/budapest.jpg";
import londonImg from "../assets/Cities/london.jpg";
import parisImg from "../assets/Cities/paris.jpg";

const Pagination = (props) => {
  return (
    <div className="pagination">
      {props.images.map((_, i) => (
        <div
          key={i}
          className={`page ${i === 0 && "active"}`}
          data-page-number={i}
        ></div>
      ))}
    </div>
  );
};

const Cities = React.forwardRef((props, ref) => {
  const [images, setImages] = useState([
    londonImg,
    berlinImg,
    budapestImg,
    parisImg,
  ]);

  const [descriptions, setDescriptions] = useState([
    {
      name: "London",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Berlin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Budapest",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Paris",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);

  return (
    <div ref={ref} className="cities">
      <Title
        title="Cities"
        description="These are the top Cities you must visit when your traveling to Europe."
      />
      <div className="flex-container">
        <div className="carousel">
          <div className="slide">
            {images.map((img, i) => (
              <img key={i} src={img} alt="carousel image" />
            ))}
          </div>
          {/* <span>test</span> */}
          <Pagination images={images} />
        </div>
        <div className="description-carousel">
          <div className="slide">
            {descriptions.map((desc, i) => (
              <div key={i} className="description">
                <h2>{desc.name}</h2>
                <span>{desc.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cities;
