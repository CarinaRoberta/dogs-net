import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginCreate from "./components/LoginCreate";
import LoginPasswordLost from "./components/LoginPasswordLost";
import LoginPasswordReset from "./components/LoginPasswordReset";
import { userContext } from "../../context/userContext";
import style from "./style.module.css";
import NotFound from "../NotFound/NotFound";

const Login = () => {
  const { login } = useContext(userContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }

  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
