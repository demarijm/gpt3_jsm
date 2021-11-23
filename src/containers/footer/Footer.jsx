import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to step in to the future before others
                </h1>
            </div>
            <div className="gpt3__footer-btn">
                <button type="button">Request Early Access</button>
            </div>


            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>6001 Cass Ave Detroit, MI, All Rights Reserved</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counter</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms &amp; Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get In Touch</h4>
                    <p>313 403 8703</p>
                    <p>support@company.com</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer