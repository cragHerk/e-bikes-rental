import { useState } from "react";
import { Link } from "react-scroll";
import MovingComponent from "react-moving-text";
import { useSpring, animated } from "react-spring";

import styles from "./Poster.module.css";

const Poster = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isTablet = window.innerWidth >= 768;
  const isDesktop = window.innerWidth >= 1200;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const imageSpring = useSpring({
    transform: imageLoaded ? "scale(1)" : "scale(1.05)",
    transition: "transform 4s ease-in-out",
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <MovingComponent
          type="fadeInFromTop"
          duration="2600ms"
          delay="0s"
          direction="normal"
          timing="ease-in"
          iteration="1"
          fillMode="none"
          className={styles.head}
        >
          Wypożyczalnia rowerów elektrycznych
        </MovingComponent>
        <Link to="bikeslist">
          <MovingComponent
            type="fadeInFromLeft"
            duration="1500ms"
            delay="0s"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none"
          >
            <button className={styles.button}>Znajdź rower</button>
          </MovingComponent>
        </Link>
        <Link to={"/"}>
          <img
            className={styles.bike_wrapper}
            src="/icon-poster.png"
            alt="logo"
          />
        </Link>
      </div>

      {!imageLoaded && <div className={styles.placeholder}></div>}
      <animated.img
        src={
          isDesktop
            ? "/assets/computer.webp"
            : isTablet
            ? "/assets/tablet.webp"
            : "/assets/mobile.webp"
        }
        alt="Poster"
        onLoad={handleImageLoad}
        style={{
          ...imageSpring,
        }}
        className={styles.image}
      />
    </div>
  );
};

export default Poster;
