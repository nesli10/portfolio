import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

function Proje() {
  const projeList = [
    {
      name: "blog sitesi",
      imgSrc: "img/blogsite.png",
    },
    {
      name: "cv sitesi",
      imgSrc: "img/cvsite.png",
    },
    {
      name: "dizi sitesi",
      imgSrc: "img/dizisite.png",
    },
    {
      name: "foto galeri sitesi",
      imgSrc: "img/fotogallery.png",
    },
    {
      name: "kamp sitesi",
      imgSrc: "img/dizisite.png",
    },
    {
      name: "kozmetik satış sitesi",
      imgSrc: "img/kozmetiksatıs.png",
    },
    {
      name: "kozmetik tanıtım sitesi",
      imgSrc: "img/kozmetiktanıtım.png",
    },
    {
      name: "todo app",
      imgSrc: "img/todoapp.png",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Anasayfa</title>
      </Helmet>
      <Header></Header>
      <div>
        {projeList.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.imgSrc}></img>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Proje;
