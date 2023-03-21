import React from "react";
import { Button } from "antd";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="socialMedia">
          <Button
            className="iconbtn"
            type="link"
            href="https://github.com/nesli10"
            icon={<GithubOutlined />}
          />
          <Button
            className="iconbtn"
            type="link"
            href="https://www.linkedin.com/in/neslisahebraldurdu/"
            icon={<LinkedinOutlined />}
          />
          <Button
            className="iconbtn"
            type="link"
            href=""
            icon={<MailOutlined />}
          />
        </div>
        <p> &copy; 2023 Neslişah Ebral Durdu </p>
      </div>
    </div>
  );
}

export default Footer;
