import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "antd";
const reviewsSettings = {
  className: "reviews-slider",
  touchMove: true,
  infinite: true,
};

const Testimonials = ({ testimonials }) => (
  <>
    <h2 className="gral-title">Testimonials</h2>
    <Carousel effect="fade" autoplay {...reviewsSettings}>
      {testimonials.map((testimonials, id) => (
        <blockquote key={id}>
          {testimonials.quote}
          <cite> – {testimonials.author}</cite>
        </blockquote>
      ))}
    </Carousel>
  </>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Testimonials;
