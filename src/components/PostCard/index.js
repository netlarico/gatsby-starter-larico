import React from "react";
import { Link } from "gatsby";
import { PageHeader, Typography, Row } from "antd";
//import { DoubleRightOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const Content = ({ children, extraContent }) => {
  return (
    <Row>
      <div className="description">{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};

const PostCard = ({ posts }) => {
  return (
    <div className="articles">
      {posts
        .filter((post) => post.node.frontmatter.templateKey === "article-page")
        .map(({ node: post }) => (
          <article key={post.id}>
            <PageHeader
              title={
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              }
              className="site-page-header"
              subTitle={post.frontmatter.date}
              //tags={<Tag color="blue">Running</Tag>}
            >
              <Content
                extraContent={
                  <img
                    src={post.frontmatter.featuredimage}
                    alt={post.frontmatter.title}
                  />
                }
              >
                <Paragraph>
                  <p>{post.excerpt}</p>
                </Paragraph>

                <Link to={post.fields.slug}>Keep Reading →</Link>
              </Content>
            </PageHeader>
          </article>
        ))}
    </div>
  );
};

export default PostCard;
