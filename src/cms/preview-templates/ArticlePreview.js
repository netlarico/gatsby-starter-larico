import React from "react";
import PropTypes from "prop-types";
import ArticleTemplate from "../../components/ArticleTemplate";

const ArticlePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  return (
    <div className="container content">
      <ArticleTemplate
        content={widgetFor("body")}
        featuredimage={entry.getIn(["data", "featuredimage"])}
        meta_title={entry.getIn(["data", "meta_title"])}
        meta_desc={entry.getIn(["data", "meta_description"])}
        title={entry.getIn(["data", "title"])}
        slug={entry.getIn(["data", "slug"])}
        tags={tags && tags.toJS()}
      />
    </div>
  );
};

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ArticlePreview;
