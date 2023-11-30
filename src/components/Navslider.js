import React, { useEffect, useState } from 'react';

const headerText = ['Enjoy 20% off on all orders $200+ | MONSTER20', 'FREE SHIPPING on all orders $200+', 'Enjoy 15% off your first order | Use code WLCM15'];

// class Navslider extends React.Component {
//     constructor() {
//         super();
//         this.state = {

//         }
//     }

//     componentDidMount() {
//         setTimeout(() => {

//         }, 3000)
//     }

//     render() {
//         return(
//             <div className='Navslider'>

//             </div>
//         )
//     }
// }

const NavSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = headerText.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 3000;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrent(0)
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [current]);

    return (
        <section className='slider'>

            {headerText.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide current' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <p className='fade-in'>{slide}</p>
                        )}

                    </div>
                );
            })}
        </section>
    );
};

export default NavSlider;