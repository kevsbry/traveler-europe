import React from "react";
import Title from "./Title";

//photos
import albumImg from "../assets/Album/album.jpg";
import albumImg1 from "../assets/Album/album1.jpg";
import albumImg2 from "../assets/Album/album2.jpg";
import albumImg3 from "../assets/Album/album3.jpg";
import albumImg4 from "../assets/Album/album4.jpg";
import albumImg5 from "../assets/Album/album5.jpg";

const Album = (props) => {
  return (
    <div className="album">
      {props.isTop && (
        <div className="row-photos" style={{ marginBottom: "1em" }}>
          <img src={props.img[0]} alt="album photo" />
          <img src={props.img[1]} alt="album photo" />
        </div>
      )}
      <img src={props.img[2]} alt="" />
      {props.isTop === false && (
        <div className="row-photos" style={{ marginTop: "1em" }}>
          <img src={props.img[0]} alt="album photo" />
          <img src={props.img[1]} alt="album photo" />
        </div>
      )}
    </div>
  );
};

const Photos = React.forwardRef((props, ref) => {
  const images = [albumImg, albumImg1, albumImg2];
  const images1 = [albumImg3, albumImg4, albumImg5];

  return (
    <div className="photos" ref={ref}>
      <Title
        title="photos"
        description="Collection of random Photos around Europe."
      />
      <div className="album-container">
        <Album isTop={true} img={images} />
        <Album isTop={false} img={images1} />
      </div>
    </div>
  );
});

export default Photos;
