import React from "react";
import { Formik, Field } from "formik";
import { navigate } from "gatsby-link";
import validationSchema from "./validationSchema";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/?no-cache=1", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contact",
            ...values,
          }),
        })
          .then(() => {
            navigate("/contact/success");
            setSubmitting(false);
          })
          .catch((error) => {
            console.log(error);
            alert("Error: Please Try Again!");
            setSubmitting(false);
          });
      }}
      render={({
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleReset,
      }) => (
        <form
          name="contact"
          onSubmit={handleSubmit}
          onReset={handleReset}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="contact-form"
        >
          <div className="field">
            {/*  eslint-disable  */}
            <label htmlFor="name" className="label">
              Name
              <Field
                className="ant-input"
                type="text"
                placeholder="Full Name"
                name="name"
                id="name"
              />
            </label>

            {touched.name && errors.name && (
              <small className="ant-typography ant-typography-danger">
                {errors.name}
              </small>
            )}
          </div>

          <div className="field">
            <label htmlFor="email" className="label">
              Email
              <Field
                className="ant-input"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
            </label>

            {touched.email && errors.email && (
              <small className="ant-typography ant-typography-danger">
                {errors.email}
              </small>
            )}
          </div>

          <div className="field">
            <label htmlFor="message" className="label">
              Message
              <Field
                className="ant-input"
                component="textarea"
                placeholder="Message"
                name="message"
                id="message"
                rows="6"
              />
            </label>

            {touched.message && errors.message && (
              <small className="ant-typography ant-typography-danger">
                {errors.message}
              </small>
            )}
          </div>

          <div className="form-group">
            <div className="control">
              <button className="ant-btn ant-btn" type="reset">
                Clear
              </button>
            </div>
            <div className="control">
              <button
                className="ant-btn ant-btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
};

export { ContactForm };
