import React from "react";
import Helmet from "react-helmet";
import Slides from "../Slides";
import Offerings from "../Offerings";
import Testimonials from "../Testimonials";
import PropTypes from "prop-types";

const HomePageTemplate = ({
  slides,
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>

    <Slides slides={slides} />

    <section className="hero">
      <div className="container">
        <h1 className="title">{title}</h1>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </section>

    <section className="offerings">
      <div className="container">
        <Offerings gridItems={offerings.blurbs} />
      </div>
    </section>

    <section className="reviews">
      <div className="container">
        <Testimonials testimonials={testimonials} />
      </div>
    </section>
  </>
);

HomePageTemplate.propTypes = {
  slides: PropTypes.array,
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
};

export default HomePageTemplate;
