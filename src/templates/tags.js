import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

class TagRoute extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug} className="ant-list-item">
        <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />

        <section className="inner-pages">
          <div className="container">
            <h1 className="general-title">Tags</h1>

            <div class="ant-list-header">
              <div>{tagHeader}</div>
            </div>

            <ul className="ant-list ant-list-split ant-list-bordered">
              {postLinks}
            </ul>

            <div class="ant-list-footer">
              <div>
                <Link to="/tags/">Browse all tags</Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
