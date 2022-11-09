import React from 'react';
import logo from '../../../images/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-teal-800  text-neutral-content">
            <div>
                <img className='h-16 w-16' src={logo} alt="" />
                <p className='text-2xl'>Tahmina's Kitchen<br />Since 2021</p>
            </div>

            <div className="">
                <span className="footer-title">Social</span>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Github</a>
            </div>

        </footer>
    );
};

export default Footer;