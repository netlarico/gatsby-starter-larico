import React, { Component } from "react";
import Helmet from "react-helmet";
import "antd/dist/antd.css";
import "../../assets/scss/styles.scss";
import config from "../../../config";
import Header from "../Header";
import Footer from "../Footer";

import { BackTop } from "antd";

class Layout extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header />

        {this.props.children}
        <Footer />

        <BackTop />
      </>
    );
  }
}

export default Layout;
