import React from "react";
import ImageSlider from '../components/Imageslider';
import { SliderData } from "../components/Sliderdata";
import ItemCard from "../components/Itemcard";
import { connect } from "react-redux";


class Dogthings extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="main-body">
                <p className="main-text">강아지 용품</p>
                <div className="bestsellers">
                    {
                        this.props.items.map(item => {
                            if (item.category === "dogthings") {
                                return (
                                    <ItemCard key={item.id} item={item} />
                                )
                            }

                            // <div className="itemresult"><Link item={item} to={`/${item.id}`}>
                            //     <div className="itemimg" key={item.id}>
                            //         <img src={item.image} />
                            //     </div>
                            //     <div className="itembrand" key={item.id}>{item.brand}</div>
                            //     <div key={item.id}>{item.item}</div>
                            //     <div className="itemprice" key={item.id}>{item.price}</div>
                            // </Link></div>

                        })
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    // Add logic here.. 

    return {
        items: state.items.itemList,
    };
};


export default connect(mapStateToProps, null)(Dogthings);