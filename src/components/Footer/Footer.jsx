import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.main}>
      <div className={style.ctn}>
        <div className={style.title}>
            &copy;{new Date().getFullYear()} DogApp &nbsp;|&nbsp;<a href='/' className={style.link}>&nbsp;Sobre nosotros&nbsp;</a> | <a className={style.link} href="mailto:magdalenalococo@gmail.com">&nbsp;Contacto</a>
        </div>
        <div className={style.disclaimer}>
              DogApp is a project developed in React, Redux, Node for the Henry Bootcamp.
        </div>
      </div>
    </div>
  );
}

export default Footer;
