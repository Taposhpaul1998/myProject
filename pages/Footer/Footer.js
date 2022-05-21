import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='footer-info'>
            <p> &copy; {year} Cycle House All Rights Reserved.</p>
        </div>
    );
};

export default Footer;