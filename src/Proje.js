import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Card } from "antd";
const { Meta } = Card;

function Proje() {
  const projeList = [
    {
      name: "blog sitesi",
      imgSrc: "img/blogsite.png",
      link: "https://blog-site-orcin.vercel.app/",
    },
    {
      name: "cv sitesi",
      imgSrc: "img/cvsite.png",
      link: "https://github.com/nesli10/mycv",
    },
    {
      name: "dizi sitesi",
      imgSrc: "img/dizisite.png",
      link: "https://github.com/nesli10/filmSite",
    },
    {
      name: "foto galeri sitesi",
      imgSrc: "img/fotogallery.png",
      link: "https://github.com/nesli10/myBlog",
    },
    {
      name: "kamp sitesi",
      imgSrc: "img/kampsite.png",
      link: "https://github.com/nesli10/kampsite",
    },
    {
      name: "kozmetik satış sitesi",
      imgSrc: "img/kozmetiksatıs.png",
      link: "https://github.com/nesli10/kozmetiksatissitesi",
    },
    {
      name: "kozmetik tanıtım sitesi",
      imgSrc: "img/kozmetiktanıtım.png",
      link: "https://github.com/nesli10/kozmetiksite",
    },
    {
      name: "todo app",
      imgSrc: "img/todoapp.png",
      link: "https://todo-app-nesli10.vercel.app/",
    },
  ];
  return (
    <div className="projeler">
      <Helmet>
        <title>Anasayfa</title>
      </Helmet>
      <Header></Header>
      <div className="site-card-wrapper">
        {projeList.map((item, index) => {
          return (
            <div key={index}>
              <Card
                className="card1"
                hoverable
                cover={
                  <Link to={item.link}>
                    <img
                      className="anasayfafoto"
                      alt="example"
                      src={item.imgSrc}
                    />
                  </Link>
                }
              >
                <Meta className="anasayfafotobaslik" title={item.name} />
              </Card>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Proje;
