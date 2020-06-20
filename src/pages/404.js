import React from "react";
import Layout from "../components/Layout";
import { Result } from "antd";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/" className="ant-btn ant-btn-primary">
          Back Home
        </Link>
      }
    />
  </Layout>
);

export default NotFoundPage;
