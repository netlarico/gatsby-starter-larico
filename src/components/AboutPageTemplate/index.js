import React from "react";
import Content from "../Content";
import PropTypes from "prop-types";
import { Typography } from "antd";

const { Title } = Typography;

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Typography className="container content-area">
      <Title>{title}</Title>
      <PageContent className="content" content={content} />
    </Typography>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AboutPageTemplate;
