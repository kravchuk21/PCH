import React from 'react';
import LogoImg from "../../assets/img/logo.png";
import styles from "./Footer.module.css"

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <img src={LogoImg} alt="logo"/>
                <p className={styles.copyright}>2021 все права защищены</p>
            </div>
        </footer>
    );
};

export default Footer;
