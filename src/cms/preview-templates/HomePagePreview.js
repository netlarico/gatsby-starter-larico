import React from "react";
import PropTypes from "prop-types";
import HomePageTemplate from "../../components/HomePageTemplate";

const HomePagePreview = ({ entry, getAsset }) => {
  const entrySlides = entry.getIn(["data", "slides"]);
  const slides = entrySlides ? entrySlides.toJS() : [];

  const entryBlurbs = entry.getIn(["data", "offerings", "blurbs"]);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const entryTestimonials = entry.getIn(["data", "testimonials"]);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  return (
    <HomePageTemplate
      slides={slides}
      title={entry.getIn(["data", "title"])}
      meta_title={entry.getIn(["data", "meta_title"])}
      meta_description={entry.getIn(["data", "meta_description"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
      offerings={{ blurbs }}
      testimonials={testimonials}
    />
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomePagePreview;
