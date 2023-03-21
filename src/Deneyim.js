import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { BankOutlined, LaptopOutlined } from "@ant-design/icons";

function Deneyimler() {
  return (
    <div>
      <Helmet>
        <title>deneyimler</title>
      </Helmet>
      <Header></Header>
      <div className="expContainer">
        <div className="expElements">
          <ol>
            <li>
              <BankOutlined />
              <h3>LİSE </h3>
              <p>Fethiye Anadolu Lisesi 2015-2019</p>
            </li>
            <li>
              <BankOutlined />
              <h3>ÜNİVERSİTE</h3>
              <p>Kocaeli Ünversitesi 2019-2023</p>
            </li>
            <li>
              <LaptopOutlined />
              <h3>Intern Full Stack Web Engineer(01.07.21-20.08.21)</h3>
              <h3>QualisICT Technology-Bilişim Vadisi</h3>
              <p>
                Laravel framework'ü kullanarak full stack kişisel projeler
                geliştirme.(html,css,php,javascript,mysql)
              </p>
            </li>
            <li>
              <LaptopOutlined />
              <h3>INTERN FULL STACK WEB ENGINEER(06.06.22-29.07.22)</h3>
              <h3>Viral Yazılım - Bilişim Vadisi</h3>
              <p>
                Mixoper projesinde frontend hatalarını düzeltmeye yardımcı
                olma(html,css) ve fullstack php ile web projesi
                geliştirme.(mysql,javascript,html,css)
              </p>
            </li>
            <li>
              <LaptopOutlined />
              <h3>INTERN FRONTEND WEB ENGINEER(19.09.22-23.12.23)</h3>
              <h3>Mahrek Teknoloj - Bilişim Vadisi</h3>
              <p>
                React.js framework'ü kullanarak kişisel frontend web sitesi
                geliştirme.(react.js,javascript,html,css)
              </p>
            </li>
          </ol>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Deneyimler;
