import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import useForm from "../../../hooks/useForm";
import { userContext } from "../../../context/userContext";
import Error from "../../Error";
import style from "./LoginForm.module.css";
import styleBtn from "../../Forms/Button/style.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(userContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={style.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={styleBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
