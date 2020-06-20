import React from "react";
import { Link } from "gatsby";
import { Breadcrumb } from "antd";

const CustomBreadcrumb = ({ crumbs }) => {
  return (
    <div className="breadcrumb-wrap">
      <div className="container">
        <Breadcrumb>
          {crumbs.map((crumb) => {
            return (
              <Breadcrumb.Item key={crumb.crumbLabel}>
                <Link to={crumb.pathname}>{crumb.crumbLabel}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    </div>
  );
};

export default CustomBreadcrumb;
