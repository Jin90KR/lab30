import React from "react"
import { NavLink, Link } from "react-router-dom";
import './Cart.css';
import { connect } from "react-redux";

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const cartItem = [
            {
                "id": "1",
                "image": "https://image.msscdn.net/images/goods_img/20210906/2112059/2112059_1_500.jpg",
                "item": "SINGLE PLEATED WIDE SWEATPANTS GRAY",
                "price": "$48",
                "category": "pants",
                "brand": "GAKKAI UNIONS"
            },
            {
                "id": "2",
                "image": "https://image.msscdn.net/images/goods_img/20230816/3469210/3469210_16928610325735_500.jpg",
                "item": "One tuck parachute cargo denim pants_grey",
                "price": "$38",
                "category": "pants",
                "brand": "DIMITRI BLACK"
            },
            {
                "id": "3",
                "image": "https://image.msscdn.net/images/goods_img/20231102/3680802/3680802_16989127858051_500.jpg",
                "item": "Vintage Half Zip Up_Navy",
                "price": "$66",
                "category": "top",
                "brand": "1993STUDIO"
              },
        ]

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
                                    console.log(this.props.cartList)
                                    return (
                                        <div className="cart-container">
                                            <div className="cart-box">
                                                <div className="cartimg">
                                                    <img src={item.item.image} />
                                                </div>
                                                <div className="cart-text">
                                                    <div className="itembrand">{item.item.brand}</div>
                                                    <div className="itemname">{item.item.item}</div>
                                                    <div className="itemsize">size</div>
                                                    <div className="orderqty">{`Qty : ${item.itemQuantity}`}</div>
                                                    <div className="itemqty"></div>
                                                    <div className="cart-buttons">
                                                        <button>Move to Wishlist</button>
                                                        <button>Remove</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <div className="cart-price">{item.item.price}</div>
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
        cartList: state.cartList,
     };
   };

export default connect(mapStateToProps, null)(Cart);