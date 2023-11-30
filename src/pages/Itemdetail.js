import React from 'react';
import './Itemdetail.css'
import { useParams } from 'react-router-dom';
import ItemCard from '../components/Itemcard';


class Itemdetail extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/items/')
            .then(response => response.json())
            .then(jsonData => {
                this.setState({ data: jsonData });
                console.log(this.state.data)
            })


        return () => console.log('cleaned')
    }

    render() {
        const { params } = this.props;
        const { data } = this.state;

        console.log(params)
        console.log(data)
        const productData = data.find((prod) => prod.id == params.itemId)
        console.log(productData)

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
                                <button className="addtobag">ADD TO BAG</button>
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



export default () => (
    <Itemdetail params={useParams()} />
)