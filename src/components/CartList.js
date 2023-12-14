import React from "react";


class CartList extends React.Component {
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
                            <div className="orderqty">{`Qty : ${item.quantity}`}</div>
                            <div className="itemqty"></div>
                            <div className="cart-buttons">
                                <button>Move to Wishlist</button>
                                <button onClick={()=>removeFromCartListFromPage(item)}>Remove</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="cart-price">{item.price}원</div>
                    </div>
                </div>
        )
    }

}


export default CartList;