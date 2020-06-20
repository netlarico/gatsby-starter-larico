import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import CustomBreadcrumb from "../components/CustomBreadcrumb";
import { useBreadcrumb } from "gatsby-plugin-breadcrumb";

export const AboutPageTemplate = ({
  title,
  image,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <section className="featured-image">
        <img className="bg" src={image} alt={title} />
        <div className="caption">
          <div className="container">
            <h1>{title}</h1>
          </div>
        </div>
      </section>

      <section className="inner-pages about">
        <div className="container">
          <PageContent className="content" content={content} />
        </div>
      </section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "About Us",
  });

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name="description" content={post.frontmatter.meta_description} />
      </Helmet>

      <CustomBreadcrumb crumbs={crumbs} />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
        meta_title
        meta_description
      }
    }
  }
`;
