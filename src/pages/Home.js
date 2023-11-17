import React from "react";
import ImageSlider from '../components/Imageslider';
import { SliderData } from "../components/Sliderdata";

function Home() {
    return (
        <main className="main-top">
            <div className="top-img">
                <ImageSlider slides={SliderData} />
            </div>

            {/* <div className="top-text">
                <p className="main-big-text">Loco [WEAK] x thisisneverthat®</p>
                <p className="main-small-text">Introducing the merchandise for Loco’s studio album [WEAK], designed in collaboration with thisisneverthat®.</p>
            </div> */}
        </main>
    );
};

export default Home;