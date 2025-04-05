import React from "react";
import style from "./Hero.module.css";
import { FiMinus } from "react-icons/fi";

const Hero = () => {
  return (
    <section className={style.container} id="intro">
      <div className={style.HeroText}>
        <div
          className={style.innerContainer}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <span>
            <FiMinus /> HELLO WORLD
          </span>
          <p>
            I am Neelesh, Front-End Developer with a strong passion for creating
            responsive and user-friendly web applications.
          </p>
        </div>
        <ul data-aos="fade-left" data-aos-duration="2000">
          <li>
            <a
              href="https://www.linkedin.com/in/neeleshsharma06/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/918769225506"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATSAPP
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hellboyOO7"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/neelesh_sharma_0607"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
        </ul>
      </div>
      <div className={style.imgContainer}>
        <img
          alt="bannner-image"
          loading="lazy"
          className={style.img}
          data-aos="fade-left"
          data-aos-duration="500"
          src="banner-bg.png"
        />
      </div>
    </section>
  );
};

export default Hero;
