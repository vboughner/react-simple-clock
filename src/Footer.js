import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    return (
        <div className="footer">{props.children}</div>
    );
};

Footer.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Footer;
