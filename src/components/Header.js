import React from "react";
import './Header.css';
import { NavLink, Link } from "react-router-dom";
import { RiSearchLine } from 'react-icons/ri';
import { BiShoppingBag } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';
import { VscHeart } from 'react-icons/vsc';

function Header() {
    const menuItem = ['MONSTER SALE', 'BRANDS', 'BEST SELLERS', 'NEW IN', 'CLOTHING', 'SHOES', 'BAGS', 'BEAUTY', 'ACCESSORIES'];
    
    return (
        <header className='header'>
            <div className="container">
                <div className="header-top">
                    <div className="search">
                        <button className="searchbtn">
                            <p className="btntext">
                                <RiSearchLine /> Search
                            </p>
                        </button>
                        <button className="hdsearchbtn">
                                <RiSearchLine />
                        </button>
                    </div>
                    <div className="logo">
                        <p>MUJINJANG</p>
                    </div>
                    <div className="top-icons">
                        <VscHeart /> <BiShoppingBag /> <GoPerson />
                    </div>
                </div>

                <nav className="header-nav">
                        {menuItem.map((item) => (
                            <li key={item}><Link to={item}>{item}</Link></li>
                        ))}
                </nav>
            </div>

            <div className="adtext">
                <p>FREE SHIPPING on all orders $200+</p>
            </div>
        </header>
    );
};

export default Header;