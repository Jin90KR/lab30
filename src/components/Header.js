import React from "react";
import './Header.css';
import { NavLink, Link } from "react-router-dom";
import { RiSearchLine } from 'react-icons/ri';
import { BiShoppingBag } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';
import { VscHeart } from 'react-icons/vsc';
import { MdOutlineManageSearch } from "react-icons/md";
import { RiHome5Line } from "react-icons/ri";
import { VscTag } from "react-icons/vsc";
import Home from '../pages/Home';
import NavSlider from "./Navslider";
import ModalSearch from "./Modalsearch";
import { connect } from "react-redux";

class Header extends React.Component{
    
    render(){
        const menuItem = ['강아지 간식', '강아지 영양제', '강아지 용품', '브랜드 스토리', '고객 리뷰', '커뮤니티'];

        return (
            <header className='header'>
                <ModalSearch />
                <div className="container">
                    <div className="header-top">
                        <div className="search">
                            
                        </div>
                        <div className="logo">
                            <p><Link to='/'>졸업 프로젝트</Link></p>
                        </div>
                        <div className="top-icons">
                            <div className="icon-heart"><VscHeart /></div>
                            <div className="icon-bag"><Link to='/cart'>
                                <BiShoppingBag />
                                <div className="cart-count">{this.props.cartList.length}</div>
                                </Link></div>
                            <div className="icon-person"><Link to='/login'><GoPerson /></Link></div>
                        </div>
                    </div>
    
                    <nav className="header-nav">
                        {menuItem.map((item) => (
                            <li key={item}><Link to={item}>{item}</Link></li>
                        ))}
                    </nav>
                </div>
    
                <div className="adtext">
                    <NavSlider />
                </div>
    
                <div className="bottom-navbar">
                    <nav className="navbar-icons">
                        <div className="icon bottom-icon-home">
                            <div><RiHome5Line /></div>
                            <span>Home</span>
                        </div>
                        <div className="icon bottom-icon-search">
                            <div><MdOutlineManageSearch /></div>
                            <span>Search</span>
                        </div>
                        <div className="icon bottom-icon-brands">
                            <div><VscTag /></div>
                            <span>Brands</span>
                        </div>
                        <div className="icon bottom-icon-wishlist">
                            <div><VscHeart /></div>
                            <span>Wishlist</span>
                        </div>
                        <div className="icon bottom-icon-my">
                            <div><GoPerson /></div>
                            <span>My</span>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}


const mapStateToProps = (state) => {
    // Add logic here..
     return {
        cartList: state.items.cartList,
     };
   };


export default connect(mapStateToProps)(Header);
