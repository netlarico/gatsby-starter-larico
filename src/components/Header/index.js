import React, { Component } from 'react';
import { Link } from 'gatsby';

import config from '../../../config';
import NavBar from '../../components/NavBar/';

class Header extends Component {
    render() {
        return (
            <>
                <header className='hdr'>
                    <div className='container'>
                        <Link className='logo' to='/' title={config.siteTitle}>
                            <span>{config.siteTitle}</span>
                        </Link>
                        <NavBar />
                    </div>
                </header>
            </>
        );
    }
}

export default Header;
