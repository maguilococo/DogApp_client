import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.main}>
      <div className={style.ctn}>
        <div className={style.title}>
            &copy;{new Date().getFullYear()} DogApp &nbsp;|&nbsp;<a href='https://github.com/maguilococo' className={style.link}>&nbsp;GitHub&nbsp;</a> | <a className={style.link} href="https://www.linkedin.com/in/magdalenalococo/">&nbsp;LinkedIn</a>
            | <a className={style.link} href="mailto:magdalenalococo@gmail.com">&nbsp;Contacto</a>
        </div>
        <div className={style.disclaimer}>
          <p>
            This app was developed in React, Redux, CSS modules, HTML in the front and Node.js, Express, Sequelize and PostgreSQL in the server side.
          </p>
          <p>You can visit both respositories at 
            <a href="https://github.com/maguilococo/DogApp_client"> client</a>
            {' & '}
            <a href="https://github.com/maguilococo/DogApp-api">server</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
