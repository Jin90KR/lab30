import React from "react"
import { NavLink, Link } from "react-router-dom";
import './Cart.css';
import ItemCard from "../components/Itemcard";
export default class Cart extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="shoppingcart">
                    <div className="empty-cart">
                        <p className="maintext">SHOPPING BAG</p>
                        <div className="empty-text">
                            <p className="empty-text-main">Your Shopping Bag is empty.</p>
                            <p className="empty-text-sub">Browse through our categories for inspiration and add something you like.<br />
                                <Link to='/login'>Sign In</Link> with your account if you want to sync your Bag.</p>
                        </div>

                        <div className="empty-buttons">
                            <button>NEW ARRIVALS</button>
                            <button>TRENDING NOW</button>
                            <button>SALE</button>
                        </div>

                        <div className="recentview">
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="non-empty-cart">
                        <p className="maintext">SHOPPING BAG (1)</p>
                        
                    </div>
                </div>
            </>
        )
    }

}