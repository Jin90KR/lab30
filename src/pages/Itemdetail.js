import React from 'react';
import './Itemdetail.css'
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { addToCart } from "../store/actions";
import withRouter from '../components/routes/withRouter';


class Itemdetail extends React.Component {
    constructor() {
        super()

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/items/${this.props.router.params.itemId}`)
            .then(response => response.json())
            .then(jsonData => {
                this.setState({ data: jsonData });
            })


        return () => console.log('cleaned')
    }

    addToCart = (e) => {
        if( this.props.cartList === true){
            if(cartListDetail.item.id === this.state.data.id && cartListDetail >= 1) {
                return cartListDetail.itemQuantity += 1
            }
        
        }

        const cartListDetail = {
            item : this.state.data,
            itemQuantity : 1
        }
        console.log(this.state.data)

        this.props.addToCart(cartListDetail);
    }

    render() {
        const { params } = this.props;
        const { data: productData } = this.state;
        
        console.log(productData)
        console.log(this.props.cartList)


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
                            <div className="ditailprice">{productData.price}</div>
                            <div className="itembuttons">
                                <button className="addtobag" onClick={this.addToCart}>ADD TO BAG</button>
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
       cartList: state.cartList,
     };
   };
   
   
   const mapDispatchToProps = (dispatch) => {
    // Add logic here..
     return {
       addToCart: (product) => dispatch(addToCart(product)),
     };
   };


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Itemdetail));
// export default () => (
//     <Itemdetail params={useParams()} />
// )
