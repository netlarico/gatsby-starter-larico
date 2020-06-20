import React from "react";
import config from "../../../config";

const Footer = () => {
  return (
    <footer className="ftr">
      <div className="container">
        <p>{config.copyright}</p>
        <p>
          Powered by <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
          <a href="https://www.netlifycms.org">Netlify CMS</a> |{" "}
          <a href="https://github.com/netlarico/gatsby-starter-larico">
            Github Repository
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
