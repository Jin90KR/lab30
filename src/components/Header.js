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
import Modal from './Modal';
import './modal.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        const menuItem = [
            {
                title: '강아지간식',
                id: 1,
                link: 'dogtreat'
            },
            {
                title: '강아지 영양제',
                id: 2,
                link: 'dogsupplement'
            },
            {
                title: '강아지 용품',
                id: 3,
                link: 'dogthings'
            },
            {
                title: '브랜드 스토리',
                id: 4,
                link: 'brandstory'
            },
            {
                title: '고객 리뷰',
                id: 5,
                link: 'review'
            },
            {
                title: '커뮤니티',
                id: 6,
                link: 'community'
            }
        ];

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
                            <div className="icon-heart"><Link to='wishlist'><VscHeart /></Link></div>
                            <div className="icon-bag"><Link to='/cart'>
                                <BiShoppingBag />
                                <div className="cart-count">{this.props.cartList.length}</div>
                            </Link></div>
                            <div className="icon-person"><Link to='/login'><GoPerson /></Link></div>
                        </div>
                    </div>

                    <nav className="header-nav">
                        {menuItem.map((item) => (
                            <li key={item.id}><Link to={item.link}>{item.title}</Link></li>
                        ))}
                    </nav>
                </div>

                <div className="adtext">
                    <NavSlider />
                </div>

                <div className="bottom-navbar">
                    <nav className="navbar-icons">
                        <div className="icon bottom-icon-home">
                            <Link to='/'>
                                <div><RiHome5Line /></div>
                                <span>Home</span>
                            </Link>
                        </div>
                        <div className="icon bottom-icon-search" >
                            <Modal show={this.state.show} handleClose={this.hideModal}>
                            </Modal>
                            <div onClick={this.showModal}>
                                <div><MdOutlineManageSearch /></div>
                                <span>Search</span>
                            </div>
                        </div>
                        <div className="icon bottom-icon-brands">
                            <Link to='brandstory'>
                                <div><VscTag /></div>
                                <span>Brand</span>
                            </Link>
                        </div>
                        <div className="icon bottom-icon-wishlist">
                            <Link to='wishlist'>
                                <div><VscHeart /></div>
                                <span>Wishlist</span>
                            </Link>
                        </div>
                        <div className="icon bottom-icon-my">
                            <Link to='/login'>
                                <div><GoPerson /></div>
                                <span>My</span>
                            </Link>
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
