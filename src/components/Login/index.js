import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginCreate from "./components/LoginForm";
import LoginPasswordLost from "./components/LoginForm";
import LoginPasswordReset from "./components/LoginForm";
import { userContext } from "../../context/userContext";

const Login = () => {
  const { login } = useContext(userContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
