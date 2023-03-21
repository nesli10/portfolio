import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

function Deneyimler() {
  return (
    <div>
      <Helmet>
        <title>deneyimler</title>
      </Helmet>
      <Header></Header>
      <div>deneyimler</div>
      <Footer></Footer>
    </div>
  );
}

export default Deneyimler;
