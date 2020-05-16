import React from "react";

function Nav(props) {
  return (
    <div className="nav" style={{ color: props.color }}>
      <div className="nav-container">
        <span
          className="logo"
          onClick={() => {
            props.smoothScroll(0);
          }}
        >
          traveler
        </span>
        <div>
          <span className="link" onClick={props.onClickCities}>
            cities
          </span>
          <span className="link" onClick={props.onClickPhotos}>
            photos
          </span>
          <span
            className="link"
            onClick={() => {
              props.smoothScroll(document.body.scrollHeight);
            }}
          >
            about
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
