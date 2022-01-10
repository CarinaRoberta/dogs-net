import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../../../context/userContext";
import { ReactComponent as MinhasFotos } from "../../../assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../../assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../assets/sair.svg";
import style from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(userContext);

  return (
    <nav className={style.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto />
        {mobile && "Adicionar foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
