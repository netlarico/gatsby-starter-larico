import React from "react";
import Content from "../Content";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import { Tag, Divider } from "antd";

const ArticleTemplate = ({
  content,
  contentComponent,
  featuredimage,
  meta_title,
  meta_desc,
  tags,
  title,
  date,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <article>
      <h1 className="title">{title}</h1>
      <small className="date">{date}</small>

      <div className="featured-img">
        <img src={featuredimage} alt={title} />
      </div>

      <PostContent className="full-content" content={content} />

      <Divider orientation="left">Tags</Divider>
      <ul className="reset h-list">
        {tags && tags.length
          ? tags.map((tag) => (
              <li key={tag + `tag`}>
                <Tag color="blue">
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </Tag>
              </li>
            ))
          : null}
      </ul>
    </article>
  );
};

export default ArticleTemplate;
