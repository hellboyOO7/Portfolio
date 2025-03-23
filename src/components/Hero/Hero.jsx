import React from "react";
import style from "./Hero.module.css";
import { FiMinus } from "react-icons/fi";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.HeroText}>
        <div className={style.innerContainer}>
          <span>
            <FiMinus /> HELLO WORLD
          </span>
          <p>
            I am Neelesh, Motivated Front-End Developer with a strong passion
            for creating responsive and user-friendly web applications.
          </p>
        </div>
        <ul>
          <li>LINKEDIN</li>
          <li>WHATSAPP</li>
          <li>GITHUB</li>
          <li>INSTAGRAM</li>
        </ul>
      </div>
      <div className={style.imgContainer}>
        <img loading="lazy" className={style.img} src="public\banner-bg.png" />
      </div>
    </div>
  );
};

export default Hero;
