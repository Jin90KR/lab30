import React from "react";
import './modal.css';


class Searchbrands extends React.Component {

    render() {
        return (
            <div className='modal-brands'>
                <p>Most Searched Brands</p>
                <ol>
                    <li>1 미펫</li>
                    <li>2 알켐 바이오</li>
                    <li>3 닥터바이</li>
                    <li>4 에이앤바이오</li>
                    <li>5 케어사이드</li>
                    <li>6 광동제약</li>
                    <li>7 포켄스</li>
                    <li>8 아이앤지메딕스</li>
                    <li>9 웰케어</li>
                    <li>10 벨벳</li>
                </ol>
            </div>
        );
    }
}

export default Searchbrands;