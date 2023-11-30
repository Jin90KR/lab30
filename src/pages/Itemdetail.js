import React from 'react';
import './Itemdetail.css'
import { useParams } from 'react-router-dom';


class Itemdetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    // componentDidMount(){
        
    // }

    render() {
        const { item } = this.props
        console.log(this.props.params)
        console.log(item)

        return (
            <div className="itemdetail">
                <div className="itemimgs">
                    <img src='https://image.msscdn.net/images/goods_img/20210906/2112059/2112059_1_500.jpg' />
                </div>

                <div className="detailbox">
                    <div className="detailbrand">brand</div>
                    <div className="detailname">SINGLE PLEATED WIDE SWEATPANTS GRAY</div>
                    <div className="ditailprice">$48</div>
                    <div className="itembuttons">
                        <button className="addtobag">ADD TO BAG</button>
                        <div className="buttons">
                            <button className="addtowishlist">Add To Wishlist</button>
                            <button className="share">Share</button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}



export default (props) => (
    <Itemdetail props={ props } params={ useParams() }/>
)