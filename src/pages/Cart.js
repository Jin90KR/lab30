import React from "react"
import { NavLink, Link } from "react-router-dom";
import './Cart.css';
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions";

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    removeFromCart = (e) => {
        console.log(e)
        this.props.removeFromCart(e);
    }

    render() {
        console.log(this.props)
        console.log(this.item)
        
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
                        <div className="maintext">
                            <p>SHOPPING BAG </p>
                            <div>({this.props.cartList.length})</div>
                        </div>
                        <div className="cart-itemcard">
                            <div>
                                {this.props.cartList.map((item) => {
                                    return (
                                        <div className="cart-container">
                                            <div className="cart-box">
                                                <div className="cartimg">
                                                    <img src={item.image} />
                                                </div>
                                                <div className="cart-text">
                                                    <div className="itembrand">{item.brand}</div>
                                                    <div className="itemname">{item.item}</div>
                                                    <div className="itemsize">size</div>
                                                    <div className="orderqty">{`Qty : ${item.quantity}`}</div>
                                                    <div className="itemqty"></div>
                                                    <div className="cart-buttons">
                                                        <button>Move to Wishlist</button>
                                                        <button onClick={this.removeFromCart(item)}>Remove</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <div className="cart-price">{item.price}</div>
                                            </div>
                                        </div>


                                    )

                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    // Add logic here..
    return {
        cartList: state.items.cartList
    };
};

const mapDispatchToProps = (dispatch) => {
    // Add logic here..
    return {
        removeFromCart: (item) => dispatch(removeFromCart(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);