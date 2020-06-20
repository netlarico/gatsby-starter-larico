import React from "react";
import Helmet from "react-helmet";
import Pricing from "../Pricing";
import PropTypes from "prop-types";

const PricingPageTemplate = ({
  title,
  image,
  meta_title,
  meta_description,
  pricing,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>

    <section className="featured-image">
      <img className="bg" src={image} alt={title} />
      <div className="caption">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </div>
    </section>

    <section className="inner-pages pricing">
      <div className="container">
        <h2>{pricing.heading}</h2>
        <p>{pricing.description}</p>

        <Pricing data={pricing.plans} />
      </div>
    </section>
  </div>
);

PricingPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

export default PricingPageTemplate;
