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
          continuous learning
        </p>
        <button className={style.cvButton}>DOWNLOAD CV</button>
      </div>
      <div className={style.imageContainer}>
        <iframe
          src="https://my.spline.design/robotfollowcursorforlandingpage-f3eb14d6951a0548d6271e31e7ba2001/"
          frameBorder="0"
          // width="100%"
          // height="100%"
          className={style.robot}
        ></iframe>
      </div>
    </div>
  );
};

export default About;
