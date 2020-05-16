import React, { useEffect, useRef } from "react";

const Title = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="location-title" style={props.position}>
      <span>{props.title}</span>
    </div>
  );
});

function Page(props) {
  const { parallax, position } = props;
  const locationRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const scrollParallax = () => {
      let box = locationRef.current.getBoundingClientRect();
      if (box.bottom < window.innerHeight) {
        let scroll =
          props.location === "france"
            ? window.scrollY - window.innerHeight
            : window.scrollY - window.innerHeight * 2;

        //transform title
        titleRef.current.style.transform = `translateY(${
          (props.location === "italy" ? window.scrollY : scroll) * 0.8
        }px)`;
        //transform images
        const locationImages = locationRef.current.querySelectorAll("img");
        locationImages.forEach((img) => {
          img.style.transform = `translateY(${
            (props.location === "italy" ? window.scrollY : scroll) * 0.6
          }px)`;
        });
      }
    };

    window.addEventListener("scroll", scrollParallax);
    return () => {
      window.removeEventListener(scrollParallax);
    };
  }, []);

  return (
    <div ref={locationRef} className={props.location}>
      {parallax.map((img, i) => (
        <img className={`img${i}`} key={i} src={img} />
      ))}

      <Title ref={titleRef} position={position} title={props.location} />
    </div>
  );
}

export default Page;
