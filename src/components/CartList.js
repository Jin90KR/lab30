import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { increaseQty, decreaseQty } from "../store/actions";
import { connect } from "react-redux";
import './CartList.css'

class CartList extends React.Component {


    increaseNum = (quantity) => {
        console.log(this.props.cartList)
        const itemQty = this.props.cartList.find((item) => item.id === quantity.id)
        itemQty.quantity += 1
        
        
    };


    decreaseNum = (quantity) => {
        console.log(this.props.cartList)
        const itemQty = this.props.cartList.find((item) => item.id === quantity.id)
        itemQty.quantity -= 1
        
    };

    render() {
        const { item, removeFromCartListFromPage } = this.props
        
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
                        <div className="orderqty">
                            <SlArrowUp className="up" onClick={() => this.increaseNum(item)} />
                            <div>{item.quantity}</div>
                            <SlArrowDown className="down" onClick={() => this.decreaseNum(item)} />
                        </div>
                        <div className="itemqty"></div>
                        <div className="cart-buttons">
                            <button>Move to Wishlist</button>
                            <button onClick={() => removeFromCartListFromPage(item)}>Remove</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cart-price">{item.price * item.quantity}원</div>
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    // Add logic here..
    return {
        cartList: state.items.cartList,
    };
};


const mapDispatchToProps = (dispatch) => {
    // Add logic here..
    return {
           increaseQty: (quantity) => dispatch(increaseQty(quantity)),
           decreaseQty: (quantity) => dispatch(decreaseQty(quantity)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CartList);