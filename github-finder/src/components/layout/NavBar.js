import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({title}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>{title}</h1>
        </nav>
    );
};

NavBar.defaultProps = {
    title: 'Nav Bar',
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}

export default NavBar;