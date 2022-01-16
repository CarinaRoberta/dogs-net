import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed";
import UserHeader from "./components/UserHeader";
import UserPhotoPost from "./components/UserPhotoPost";
import UserStats from "./components/UserStats";
import { userContext } from "../../context/userContext";
import NotFound from "../NotFound/NotFound";
import Head from "../Head/Head";

const User = () => {
  const { data } = useContext(userContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
