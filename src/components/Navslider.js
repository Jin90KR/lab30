import React, { useEffect, useState } from 'react';

const headerText = ['가입하고 10% 할인받기', '특별 크리스마스 세일 | Use code 23CM', '만원이상 주문시 배달비 무료'];

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