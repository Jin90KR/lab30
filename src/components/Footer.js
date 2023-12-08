import React from "react";
import { NavLink, Link } from "react-router-dom";
import About from '../pages/About';
import Terms from '../pages/Terms';
import Policy from '../pages/Policy';
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-top">
                <p><Link to={About}>About 졸업 프로젝트</Link></p>
                <p><Link to={Terms}>Terms & Conditions</Link></p>
                <p><Link to={Policy}>Privacy Policy</Link></p>
            </div>

            <div className="footer-button">
                <button className="faqbtn">FAQ</button>
                <button className="contactbtn">Contact us</button>
            </div>

            <div className="download-app">
                <p className="download-text">Download the 졸업프로젝트 app</p>
                <div className="apps" >
                    <div className="app-store">
                        <FaApple />
                        <div className="app-text">
                            <p>Download on the</p>
                            <p className="big-text">App Store</p>
                        </div>
                    </div>
                    <div className="app-store">
                        <FaGooglePlay />
                        <div className="app-text">
                            <p>GET IT ON</p>
                            <p className="big-text">Google Play</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="snsicons">
                <div className="insta circle">
                    <Link><FaInstagram /></Link>
                </div>
                <div className="twitter circle">
                    <Link><FiTwitter /></Link>
                </div>
                <div className="youtube circle">
                    <Link><RiYoutubeLine /></Link>
                </div>
            </div>

            <button className="footer-about">
                Learn more about 졸업프로젝트 Co.,Ltd.
                <div className="uparrow"><IoIosArrowUp /></div>
            </button>

            <p className="footer-last">졸업프로젝트 Co.,Ltd may not be the direct seller but only an intermediary for some products. In this case, MUJINJANG has limited liability for products, information, and transactions. Please check the product details page of each product.</p>
        </footer>
    );
};

export default Footer;