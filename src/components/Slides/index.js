import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import { Carousel } from 'antd';

const SlideSettings = {
    className: 'full-width-slider',
    lazyLoad: true,
    infinite: true,
    arrows: true,
};

const Slides = ({ slides }) => (
    <Carousel effect='fade' autoplay {...SlideSettings}>
        {slides.map((slides, id) => (
            <div key={id}>
                <img
                    width='1903'
                    height='450'
                    className='slide-img'
                    src={slides.image}
                    alt={slides.title}
                />
                <div className='caption'>
                    <h2>{slides.title}</h2>
                    <p>{slides.description}</p>
                    <Link
                        className='ant-btn ant-btn-primary'
                        to={slides.linkto}
                    >
                        <span>Learn more</span>
                    </Link>
                </div>
            </div>
        ))}
    </Carousel>
);

Slides.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            linkto: PropTypes.string,
        })
    ),
};

export default Slides;
