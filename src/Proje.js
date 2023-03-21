import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

function Proje() {
  return (
    <div>
      <Helmet>
        <title>Anasayfa</title>
      </Helmet>
      <Header></Header>

      <Footer></Footer>
    </div>
  );
}

export default Proje;
