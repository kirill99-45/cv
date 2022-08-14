import { useState } from 'react';
import Slides from './slides.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './slider.css';

const Slider = ({ setLayoutState, slider }) => {

  const [sliderState, setSliderState] = useState({ slides : slider, active : 1 })

  const { active, slides } = sliderState

  const prevSlide = () => {
    setSliderState({ slides, active : active < slides.length && active > 0 ? active - 1 : slides.length - 1  })
  }

  const nextSlide = () => {
    setSliderState({ slides, active : active < slides.length - 1 ? active + 1 : 0 })
  }

  return (
    <>
      <div className='project__photo-container'>
        <FontAwesomeIcon icon={faAngleLeft} className='prev-slide' onClick={prevSlide}/>
        <Slides
          sliderState={sliderState}
          setLayoutState={setLayoutState}
          slider={slider}
          setSliderState={setSliderState}
        />
        <FontAwesomeIcon icon={faAngleRight} className='next-slide' onClick={nextSlide}/>
      </div>
      <ul className='photo__nav-container'>
        { sliderState.slides.map((item, i) => <li className={i === sliderState.active ? 'dot active' : 'dot'} />) }
      </ul>
    </>
  )
}

export default Slider;
