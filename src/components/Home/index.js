import React from "react";
import Feed from "../Feed";
import Head from "../Head/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site Dogs com o Feed de fotos" />
      <Feed />
    </section>
  );
};

export default Home;
