import React from "react";
import Layout from "../../../components/Layout";
import { Link } from "gatsby";
import { Result } from "antd";

const SuccessPage = () => {
  return (
    <Layout>
      <Result
        status="success"
        title="Thank you for getting in touch! "
        subTitle="One of our colleagues will get back in touch with you soon!, Have a great day!"
        extra={[
          <Link to="/" className="ant-btn ant-btn-primary">
            Back Home
          </Link>,
        ]}
      />
    </Layout>
  );
};

export default SuccessPage;
