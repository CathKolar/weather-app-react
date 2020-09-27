import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      {" "}
      <small>
        <a
          href="https://github.com/CathKolar/Weather-app-project"
          target="blank"
        >
          <span className="link"> Open-source code </span>
        </a>
        by
        <a href="https://www.linkedin.com/in/catherinekolar/" target="blank">
          <span className="link"> Catherine Kolar </span>
        </a>
      </small>
    </div>
  );
}
