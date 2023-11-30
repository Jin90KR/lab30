import { Link, useParams } from "react-router-dom"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Itemdetail from "../pages/Itemdetail";




export default class ItemCard extends React.Component {
    render() {
        const { item } = this.props
        console.log(item)

        return (
            <>
                <Routes>

                    <Route path='/:itemId'
                        render={(props) => <Itemdetail {...props} props={item} />} />
                </Routes>
                <div className="itemresult">
                    <Link to={`/${item.id}`} onClick={() => {window.scroll(0, 0);}}>
                        <div className="itemimg">
                            <img src={item.image} />
                        </div>
                        <div className="itembrand">{item.brand}</div>
                        <div>{item.item}</div>
                        <div className="itemprice">{item.price}</div>
                    </Link>
                </div>
            </>
        )
    }
}


