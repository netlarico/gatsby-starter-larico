import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";

const Pricing = ({ data }) => (
  <div className="boxes">
    {data.map((price) => {
      return (
        <Card title={price.plan} key={price.plan}>
          <h2 className="price">${price.price}</h2>
          <p>{price.description}</p>

          <ul>
            {price.items.map((item) => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      );
    })}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;
