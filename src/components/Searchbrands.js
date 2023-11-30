import React from "react";
import './modal.css';


class Searchbrands extends React.Component {

    render() {
        return (
            <div className='modal-brands'>
                <p>Most Searched Brands</p>
                <ol>
                    <li>1 thisisneverthat®</li>
                    <li>2 MATIN KIM</li>
                    <li>3 MARDI MERCREDI</li>
                    <li>4 MUSINSA STANDARD</li>
                    <li>5 MAHAGRID</li>
                    <li>6 GLOWNY</li>
                    <li>7 CODEGRAPHY</li>
                    <li>8 DRAWFIT</li>
                    <li>9 INSILENCE</li>
                    <li>10 PHYPS</li>
                </ol>
            </div>
        );
    }
}

export default Searchbrands;