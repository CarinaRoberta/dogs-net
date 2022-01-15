import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed";
import UserHeader from "./components/UserHeader";
import UserPhotoPost from "./components/UserPhotoPost";
import UserStats from "./components/UserStats";
import { userContext } from "../../context/userContext";

const User = () => {
  const { data } = useContext(userContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
