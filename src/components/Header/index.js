import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dog } from "../../assets/dogs.svg";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <Dog />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar conta
        </Link>
      </nav>
    </header>
  );
};

export default Header;
