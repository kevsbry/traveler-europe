import React from "react";
import Title from "./Title";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const openPage = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="about">
      <Title
        title="about"
        description="Hi! I'm Kevin Bryan, this is a personal project for my portfolio."
      />
      <div className="icon-container">
        <Icon
          className="social-icon"
          icon={faLinkedin}
          onClick={() => {
            openPage("https://www.linkedin.com/in/kbbautista/");
          }}
        />
        <Icon
          className="social-icon"
          icon={faYoutube}
          onClick={() => {
            openPage(
              "https://www.youtube.com/channel/UCAyMW_SB2bqmB_Z5xrxgpuQ?view_as=subscriber"
            );
          }}
        />
        <Icon
          className="social-icon"
          icon={faInstagram}
          onClick={() => {
            openPage("https://www.instagram.com/nivekbryan/");
          }}
        />
      </div>
    </div>
  );
}

export default About;
