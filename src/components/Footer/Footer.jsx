import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.main}>
      <div className={style.ctn}>
        <div className={style.title}>
            <a href='https://github.com/maguilococo' rel="noopener noreferrer" target="_blank" className={style.link}>&nbsp;<FaGithub />&nbsp;</a> 
            | <a className={style.link} href="https://www.linkedin.com/in/magdalenalococo/" rel="noopener noreferrer" target="_blank">&nbsp;<FaLinkedin /></a>
            | <a className={style.link} href="mailto:magdalenalococo@gmail.com" rel="noopener noreferrer" target="_blank">&nbsp;<FiMail /></a>
            | &nbsp;<span className={style.license}>&nbsp;&copy;{new Date().getFullYear()} DogApp &nbsp;</span>
        </div>
        <div className={style.disclaimer}>
          <p>
            This app was developed in React, Redux, CSS modules, HTML in the front and Node.js, Express, Sequelize and PostgreSQL in the server side.
          </p>
          <p>You can visit both respositories -> 
            <a href="https://github.com/maguilococo/DogApp_client" rel="noopener noreferrer" target="_blank"> client</a>
            {' & '}
            <a href="https://github.com/maguilococo/DogApp-api" rel="noopener noreferrer" target="_blank">server</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
