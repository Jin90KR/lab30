import React from 'react';
import './Itemdetail.css'
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { addToCart } from "../store/actions";
import withRouter from '../components/routes/withRouter';
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { FaThemeisle } from 'react-icons/fa';


class Itemdetail extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }

    // componentDidMount() {
    //     fetch(`http://localhost:3000/items/${this.props.router.params.itemId}`)
    //         .then(response => response.json())
    //         .then(jsonData => {
    //             this.setState({ data: jsonData });
    //         })


    //     return () => console.log('cleaned')
    // }

    addToCartFromPage = (e) => {
        // console.log(this.props.router)
        // const newItem = this.props.itemList.find((item) => item.id === this.props.router.params.itemId)
        this.props.addToCart(this.props.router.params.itemId);
    };

    // increaseNum = (quantity) => {
    //     this.props.increaseNum(quantity)
    // };


    // decreaseNum = (quantity) => {
    //     this.props.decreaseNum(quantity)
    // };


    render() {
        const paramsId = this.props.router.params.itemId;
        const productData = this.props.itemList.find((prod) => prod.id == paramsId)
        console.log(this.props.router.params.itemId)
        


        return (
            <div >
                {productData ?
                    <div className="itemdetail">
                        <div className="itemimgs">
                            <img src={productData.image} />
                        </div>
                        <div className="detailbox">
                            <div className="detailbrand">{productData.brand}</div>
                            <div className="detailname">{productData.item}</div>
                            <div className='detailQty'>
                                <button onClick={this.increaseNum}><SlArrowUp /></button>
                                <div>{productData.quantity}</div>
                                <button onClick={this.decreaseNum}><SlArrowDown /></button>
                            </div>
                            <div className="ditailprice">{productData.price}</div>
                            <div className="itembuttons">
                                <button className="addtobag" onClick={this.addToCartFromPage}>ADD TO BAG</button>
                                <div className="buttons">
                                    <button className="addtowishlist">Add To Wishlist</button>
                                    <button className="share">Share</button>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div>No item</div>
                }
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    // Add logic here..
    return {
        itemList: state.items.itemList,
        cartList: state.items.cartList,
    };
};


const mapDispatchToProps = (dispatch) => {
    // Add logic here..
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        //    increaseNum: (quantity) => dispatch(increaseNum(quantity)),
        //    decreaseNum: (quantity) => dispatch(decreaseNum(quantity)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Itemdetail));

