import React, { useEffect, useState } from 'react';
import { SliderData } from './Sliderdata';


const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

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

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide current' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className='main-top'>
                <img src={slide.image} alt='slide' className='topimage' />
                <div className="top-text">
                  <p className="main-big-text">{slide.btext}</p>
                  <p className="main-small-text">{slide.stext}</p>
                </div>
              </div>
            )}

          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;