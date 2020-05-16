import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Cities from "./components/Cities";
import Photos from "./components/Photos";
import About from "./components/About";

//photos
import italyBuilding from "./assets/Italy/buildings.png";
import italyBuilding1 from "./assets/Italy/buildings1.png";
import franceImg from "./assets/France/castle.png";
import franceImg1 from "./assets/France/lake.png";
import germanyImg from "./assets/Germany/building.png";

const position = [
  {
    top: "50%",
    left: "15%",
  },
  {
    top: "4%",
    left: "40%",
  },
  {
    top: "10%",
    left: "35%",
  },
];

function App() {
  const [navColor, setNavColor] = useState("#fff");
  const citiesRef = useRef();
  const photosRef = useRef();

  const smoothScroll = (scrollTo) => {
    var startY = window.pageYOffset; //current scroll position
    var stopY = scrollTo; // scroll to
    var distance = stopY > startY ? stopY - startY : startY - stopY;

    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY;
        timer++;
      }
      return;
    }
    for (var i = startY; i > stopY; i -= step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }
  };

  const onClickCities = () => {
    smoothScroll(citiesRef.current.offsetTop);
  };

  const onClickPhotos = () => {
    smoothScroll(photosRef.current.offsetTop);
  };

  useEffect(() => {
    const changeNavColor = () => {
      const box = citiesRef.current.getBoundingClientRect();
      if (box.bottom < window.innerHeight) setNavColor("#514f4f");
      else setNavColor("#fff");
    };
    window.addEventListener("scroll", changeNavColor);
    return () => {
      window.removeEventListener("scroll", changeNavColor);
    };
  }, []);

  return (
    <div className="App">
      <Nav
        color={navColor}
        onClickCities={onClickCities}
        onClickPhotos={onClickPhotos}
        smoothScroll={smoothScroll}
      />
      <Page
        location="italy"
        position={position[0]}
        parallax={[italyBuilding1, italyBuilding]}
      />
      <Page
        location="france"
        position={position[1]}
        parallax={[franceImg, franceImg1]}
      />
      <Page location="germany" position={position[2]} parallax={[germanyImg]} />
      <Cities ref={citiesRef} />
      <Photos ref={photosRef} />
      <About />
    </div>
  );
}

export default App;
