import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { ContactForm } from "../forms";

import { PageHeader } from "antd";

const ContactPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
}) => {
  return (
    <>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      <section className="container content-area contact-page">
        <PageHeader
          className="site-page-header"
          title={title}
          subTitle={subtitle}
        />

        <ContactForm />
      </section>
    </>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
};

export default ContactPageTemplate;
