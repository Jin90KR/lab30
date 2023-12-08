import React from "react";
import './modal.css';


class Searchpopular extends React.Component {

    render() {
        return (
            <div className='modal-popular'>
                <p>Popular</p>
                <ol>
                    <li>1 강아지 눈 영양제</li>
                    <li>2 강아지 관절 영양제</li>
                    <li>3 강아지 심장 영양제</li>
                    <li>4 강아지 유산균</li>
                    <li>5 강아지 기관지 영양제</li>
                    <li>6 노견 종합 영양제</li>
                    <li>7 강아지 뼈 간식</li>
                    <li>8 강아지 오메가3 영양제</li>
                    <li>9 강아지 오리 간식</li>
                    <li>10 강아지 종합 영양제</li>
                </ol>
            </div>
        );
    }
}

export default Searchpopular;