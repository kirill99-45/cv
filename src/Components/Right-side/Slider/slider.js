import { useState } from 'react';
import Slides from './slides.js';
import Dotts from './dotts.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './slider.css';

const Slider = ({ setLayoutState, slider }) => {

  const [sliderState, setSliderState] = useState({ slides : slider, active : 2 })

  const prevSlide = () => { // Нужно оптимизировать!
    const result = slider.pop()
    slider.unshift(result)
    setSliderState({ slides : slider, active : slider[1].id })
  }

  // const prevSlide = (state) => { // Предыдущее фото
  //   setPhoto(state < (photos.length) && state > 1 ? state - 1 : photos.length - 1)
  // }

  const nextSlide = () => { // Нужно оптимизировать!
    const result = slider.shift()
    slider.push(result)
    setSliderState({ slides : slider, active : slider[1].id})
  }

  // const nextSlide = (state) => { // Следующее фото
  //   setPhoto(state < (photos.length - 1)  ? state + 1 : 1)
  // }




  return (
    <>
      <div className='project__photo-container'>
        <FontAwesomeIcon icon={faAngleLeft} className='prev-slide'onClick={prevSlide}/>
        <Slides
          sliderState={sliderState}
          setLayoutState={setLayoutState}
          slider={slider}
          setSliderState={setSliderState}/>
        <FontAwesomeIcon icon={faAngleRight} className='next-slide' onClick={nextSlide}/>
      </div>
      <ul className='photo__nav-container'>
        <Dotts sliderState={sliderState}/>
      </ul>
    </>
  )
}

export default Slider;
