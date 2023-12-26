import React from "react";
import ImageSlider from '../components/Imageslider';
import { SliderData } from "../components/Sliderdata";
import './Home.css'
import ItemCard from "../components/Itemcard";
import { connect } from "react-redux";
import { getItems } from "../store/actions";


class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }


    componentDidMount() {
        console.log('getItems')
        this.props.getItems()
    }

    

    render() {
        console.log(this.props)
        

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
                            this.props.items.items.map(item => {
                                if(item.bestsellers === true){
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
            </>

        );

    }

}


const mapStateToProps = (state) => {
    // Add logic here.. 

    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    // Add logic here..
    return {
        getItems: () => dispatch(getItems()),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);