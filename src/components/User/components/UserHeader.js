import React, { useEffect, useState } from "react";
import UserHeaderNav from "./UserHeaderNav";
import style from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className={style.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav></UserHeaderNav>
    </header>
  );
};

export default UserHeader;
