import { Link, useParams } from "react-router-dom"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Itemdetail from "../pages/Itemdetail";
import '../pages/Home.css'



export default class ItemCard extends React.Component {
    render() {
        const { item } = this.props

        return (
            <div className="itemresult">
                <Link item={item} to={`/${item.id}`} className="item">
                    <div className="itemimg">
                        <img src={item.image} />
                    </div>
                    <div className="itembrand">{item.brand}</div>
                    <div>{item.item}</div>
                    <div className="itemprice">{item.price}원</div>
                </Link>
            </div>
        )
    }
}


