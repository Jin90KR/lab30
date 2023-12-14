import React from "react";
import './list.css';
import { NavLink, Link } from "react-router-dom";

class List extends React.Component {

    render() {
        const { itemsList, brandsList } = this.props
        
        return (
            <div>
                <p>Brands<br /><br /></p>
                {
                    brandsList.map((brand) => {
                        return (
                            <Link to={`/${brand.id}`} className="brand_link">
                            <div className="itemresult">
                                <div key={brand.id}>{brand.brand}</div>
                            </div>
                            </Link>
                        )
                    })
                }

                <p>Items<br /><br /></p>
                {
                    itemsList.map((item) => {
                        return (
                            <Link to={`/${item.id}`} className="item_link">
                            <div className="itemresult">
                                <div key={item.id}>{item.item}</div>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }

}


export default List