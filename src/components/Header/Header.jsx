import style from "./Header.module.css";
import { SlOptionsVertical } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(true);
    }
  };
  const closeHam = () => {
    setIsOpen(true);
  };
  return (
    <section
      data-aos="fade-down"
      data-aos-duration="500"
      className={style.header}
    >
      <div className={style.container}>
        <a href="/" className={style.logo}>
          <p>NEELESH.</p>
        </a>

        <ul
          onClick={handleOverlayClick}
          className={`${style.headerContainer} ${isOpen ? style.opened : ""}`}
        >
          <a href="#intro" onClick={closeHam}>
            <li className={style.active}>INTRO</li>
          </a>
          <a href="#about" onClick={closeHam}>
            <li>ABOUT</li>
          </a>
          <a href="#projects" onClick={closeHam}>
            <li>PROJECTS</li>
          </a>
          <a href="#contact" onClick={closeHam}>
            <li>SAY HELLO</li>
          </a>
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
    </section>
  );
};

export default Header;
