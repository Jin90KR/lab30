import React from "react"
import { NavLink, Link } from "react-router-dom";
import './Cart.css';
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions";
import CartList from "../components/CartList";


class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    removeFromCartListFromPage = (item) => {
        console.log(item)
        this.props.removeFromCart(item)
    }

    render() {
        console.log(this.props.cartList)


        return (
            <>
                <div className="shoppingcart">
                    {this.props.cartList.length > 0 ?
                        <div className="non-empty-cart">
                            <div className="maintext">
                                <p>SHOPPING BAG </p>
                                <div>({this.props.cartList.length})</div>
                            </div>
                            <div className="cart-itemcard">
                                <div>
                                    {this.props.cartList.map((item) => {
                                        return (
                                            <CartList key={item.id} item={item} removeFromCartListFromPage={this.removeFromCartListFromPage} />
                                        )
                                    })}
                                    <div className="totalprice">
                                        <p>합계: {this.props.totalPrice}원</p>
                                    </div>
                                </div>

                            </div>
                        </div> :
                        <div className="empty-cart">
                            <p className="maintext">SHOPPING BAG</p>
                            <div className="empty-text">
                                <p className="empty-text-main">Your Shopping Bag is empty.</p>
                                <p className="empty-text-sub">Browse through our categories for inspiration and add something you like.<br />
                                    <Link to='/login'>Sign In</Link> with your account if you want to sync your Bag.</p>
                            </div>
                            <div className="empty-buttons">
                                <button>NEW ARRIVALS</button>
                                <button>BEST SELLERS</button>
                                <button>SALE</button>
                            </div>
                        </div>
                    }
                </div>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    // Add logic here..
    return {
        cartList: state.cartList,
        items: state.items.items
    };
};

const mapDispatchToProps = (dispatch) => {
    // Add logic here..
    return {
        removeFromCart: (item) => dispatch(removeFromCart(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);