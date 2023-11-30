import React from "react";
import ImageSlider from '../components/Imageslider';
import { SliderData } from "../components/Sliderdata";
import './Home.css'
import Itemdetail from "./Itemdetail";
import { NavLink, Link } from "react-router-dom";
import ItemCard from "../components/Itemcard";


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],

        };
    }


    componentDidMount() {
        fetch('http://localhost:3000/items')
            .then(response => response.json())
            .then(things => {
                console.log(things)
                this.setState(
                    () => ({
                        items: things
                    })
                );
            })
    }

    render() {

        return (
            <>
                <div className="main-top">
                    <div className="top-img">
                        <ImageSlider slides={SliderData} />
                    </div>
                </div>

                <div className="main-body">
                    <p className="main-text">BEST SELLERS</p>
                    <div className="bestsellers">
                        {
                            this.state.items.map(item => {
                                return (
                                    <ItemCard key={item.id} item={ item } />
                                    // <div className="itemresult"><Link item={item} to={`/${item.id}`}>
                                    //     <div className="itemimg" key={item.id}>
                                    //         <img src={item.image} />
                                    //     </div>
                                    //     <div className="itembrand" key={item.id}>{item.brand}</div>
                                    //     <div key={item.id}>{item.item}</div>
                                    //     <div className="itemprice" key={item.id}>{item.price}</div>
                                    // </Link></div>
                                )
                            })
                        }
                    </div>
                </div>
            </>

        );

    }

}


export default Home;