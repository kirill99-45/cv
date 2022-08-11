import { useState } from 'react';
import Slides from './slides.js';
import Dotts from './dotts.js';
import './slider.css';

const Slider = ({ setLayoutState, slider }) => {

  const [sliderState, setSliderState] = useState({ slides : slider, active : 2 })

  const prevSlide = () => {
    const result = slider.pop()
    slider.unshift(result)
    setSliderState({ slides : slider, active : slider[1].id })
  }

  const nextSlide = () => {
    const result = slider.shift()
    slider.push(result)
    setSliderState({ slides : slider, active : slider[1].id})
  }

  return (
    <>
      <div className='project__photo-container'>
        <div className='prev-slide'onClick={prevSlide}/>
        <Slides
          sliderState={sliderState}
          setLayoutState={setLayoutState}
          slider={slider}
          setSliderState={setSliderState}/>
        <div className='next-slide' onClick={nextSlide}/>
      </div>
      <ul className='photo__nav-container'>
        <Dotts sliderState={sliderState}/>
      </ul>
    </>
  )
}

export default Slider;
