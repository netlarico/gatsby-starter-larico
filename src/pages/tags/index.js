import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import { Badge } from "antd";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${title}`} />
    <section className="inner-pages">
      <div className="container">
        <h1 className="general-title">Tags</h1>
        <ul className="ant-list ant-list-split ant-list-bordered">
          {group.map((tag) => (
            <li key={tag.fieldValue} className="ant-list-item">
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} <Badge count={tag.totalCount} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
