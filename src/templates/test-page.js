import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import CustomBreadcrumb from '../components/CustomBreadcrumb';
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb';

export const TestPageTemplate = ({
    title,
    image,
    content,
    contentComponent,
}) => {
    const PageContent = contentComponent || Content;

    return (
        <>
            <section className='featured-image'>
                <img className='bg' src={image} alt={title} />
                <div className='caption'>
                    <div className='container'>
                        <h1>{title}</h1>
                    </div>
                </div>
            </section>

            <section className='inner-pages about'>
                <div className='container'>
                    <PageContent className='content' content={content} />
                </div>
            </section>
        </>
    );
};

TestPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const TestPage = ({ data, location }) => {
    const { markdownRemark: post } = data;

    const { crumbs } = useBreadcrumb({
        location,
        crumbLabel: 'Test',
    });

    return (
        <Layout>
            <Helmet>
                <title>{post.frontmatter.meta_title}</title>
                <meta
                    name='description'
                    content={post.frontmatter.meta_description}
                />
            </Helmet>

            <CustomBreadcrumb crumbs={crumbs} />
            <TestPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                image={post.frontmatter.image}
                content={post.html}
            />
        </Layout>
    );
};

TestPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default TestPage;

export const TestPageQuery = graphql`
    query TestPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                image
                meta_title
                meta_description
            }
        }
    }
`;
