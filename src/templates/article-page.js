import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HTMLContent } from "../components/Content";
import ArticleTemplate from "../components/ArticleTemplate";
import SE0 from "../components/SEO";
import Share from "../components/Share";
import Disqus from "../components/Disqus";
import Layout from "../components/Layout";

//import Sidebar from "../components/Sidebar";

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      {/* add "with-sidebar" className to "posts-detail" for sidebar  */}
      <section className="posts-detail">
        <SE0
          title={post.frontmatter.title}
          meta_title={post.frontmatter.meta_title}
          meta_desc={post.frontmatter.meta_description}
          featuredimage={post.frontmatter.featuredimage}
          slug={post.fields.slug}
          date={post.frontmatter.date}
        />
        <div className="container ">
          <div className="left-area">
            <ArticleTemplate
              content={post.html}
              contentComponent={HTMLContent}
              featuredimage={post.frontmatter.featuredimage}
              meta_title={post.frontmatter.meta_title}
              date={post.frontmatter.date}
              meta_desc={post.frontmatter.meta_description}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
            />
            <Share
              title={post.frontmatter.title}
              slug={post.fields.slug}
              excerpt={post.frontmatter.meta_description}
            />
            <Disqus title={post.frontmatter.title} slug={post.fields.slug} />
          </div>

          {/* <Sidebar /> */}
        </div>
      </section>
    </Layout>
  );
};

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ArticlePage;

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage
        meta_title
        meta_description
        tags
      }
    }
  }
`;
