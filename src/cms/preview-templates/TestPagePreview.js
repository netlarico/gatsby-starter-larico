import React from 'react';
import PropTypes from 'prop-types';
import { TestPageTemplate } from '../../templates/test-page';

const TestPagePreview = ({ entry, widgetFor }) => (
    <TestPageTemplate
        title={entry.getIn(['data', 'title'])}
        image={entry.getIn(['data', 'image'])}
        meta_title={entry.getIn(['data', 'meta_title'])}
        meta_description={entry.getIn(['data', 'meta_description'])}
        content={widgetFor('body')}
    />
);

TestPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default TestPagePreview;
