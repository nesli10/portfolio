import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div className="home">
        <Helmet>
          <title>Anasayfa</title>
        </Helmet>
        <Header></Header>
        <div className="about">
          <h2>Selam, ben Neslişah Ebral Durdu</h2>
          <div className="prompt">
            <p>
              bilişim sistemleri mühendisliği son sınıf öğrencisiyim. web
              teknolojileri geliştirmeye ilgiliyim.
            </p>
          </div>
        </div>
        <div className="skills">
          <h1>Yetkinlikler</h1>
          <ol className="list">
            <li className="item">
              <h2>Front-End</h2>
              <span>ReactJS,Redux, HTML, CSS,BootStrap,</span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>MySQL,Laravel</span>
            </li>
            <li className="item">
              <h2>Programming Languages</h2>
              <span>JavaScript, Java,C#,Php</span>
            </li>
          </ol>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
