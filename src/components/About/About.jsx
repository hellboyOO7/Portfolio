import React from "react";
import style from "./About.module.css";
import { FiMinus } from "react-icons/fi";

const About = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.textContainer}>
        <span>
          <FiMinus /> ABOUT
        </span>
        <p>
          Proficient in React.js, HTML, CSS, and JavaScript with hands-on
          experience in designing and deploying web projects. Skilled in UI/UX
          design and Agile methodologies. Focused on delivering impactful
          solutions, enhancing problem-solving abilities, and committing to
          continuous learning.
        </p>
        <a href="public\Neelesh Sharma.pdf" download="Neelesh Sharma CV">
          <button className={style.cvButton}>DOWNLOAD CV</button>
        </a>
      </div>

      <div className={style.imageContainer}>
        <iframe
          loading="lazy"
          src="https://my.spline.design/robotfollowcursorforlandingpage-f3eb14d6951a0548d6271e31e7ba2001/"
          frameBorder="0"
          className={style.robot}
        ></iframe>
      </div>
    </div>
  );
};

export default About;
