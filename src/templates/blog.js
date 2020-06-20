import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../config";
import Helmet from "react-helmet";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";
//import Sidebar from "../components/Sidebar";

import { Space } from "antd";

const PaginationLink = (props) => {
  if (!props.test) {
    return (
      <Link to={`/blog/${props.url}`} className="ant-btn ant-btn-primary">
        {props.text}
      </Link>
    );
  } else {
    return <span className="ant-btn ant-btn-disabled">{props.text}</span>;
  }
};

export default class BlogPage extends Component {
  render() {
    const { pageContext } = this.props;
    const { group, index, first, last } = pageContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString() + "/";

    const websiteSchemaOrgJSONLD = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
    };

    return (
      <Layout>
        <Helmet>
          <title>Blog | {config.siteTitle}</title>
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>

        <section className="featured-image">
          <img className="bg" src="/img/products-grid3.jpg" alt="Blog" />
          <div className="caption">
            <div className="container">
              <h1>Blog</h1>
            </div>
          </div>
        </section>

        {/* add "with-sidebar" class name to "posts" for sidebar */}

        <section className="posts">
          <div className="container">
            <div className="left-area">
              <PostCard posts={group} />

              <Space size="large">
                <PaginationLink
                  test={first}
                  url={previousUrl}
                  text="Previous Page"
                />
                <PaginationLink test={last} url={nextUrl} text="Next Page" />
              </Space>
            </div>

            {/* <Sidebar /> */}
          </div>
        </section>
      </Layout>
    );
  }
}
