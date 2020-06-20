import React from "react";
import PropTypes from "prop-types";

import { Card } from "antd";

const Offerings = ({ gridItems }) => (
  <>
    {gridItems.map((item) => (
      <Card key={item.image} title={item.title}>
        <img className="thumb" alt={item.title} src={item.image} />
        <p>{item.text}</p>
      </Card>
    ))}
  </>
);

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Offerings;
