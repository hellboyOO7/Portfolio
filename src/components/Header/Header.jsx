import style from "./Header.module.css";
import { SlOptionsVertical } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header
      // data-aos="fade-up"
      // data-aos-duration="1000"
      className={style.header}
    >
      <div className={style.container}>
        <p className={style.logo}>NEELESH.</p>

        <ul
          className={`${style.headerContainer} ${isOpen ? style.opened : ""}`}
        >
          <li className={style.active}>INTRO</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>SAY HELLO</li>
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${style.hamMenu}`}
        >
          <span className={`${style.icon} ${isOpen ? style.rotate : ""}`}>
            {isOpen ? <SlOptionsVertical /> : <RxCross1 />}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
