import { useState } from 'react';
import { Slides } from './slides.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './slider.css';

export const Slider = ({ setLayoutState, slider }) => {

  const [sliderState, setSliderState] = useState({ slides : slider, active : 1 })
  const { active, slides } = sliderState

  return (
    <>
      <div className='project__photo-container'>
        <button
          type='button'
          className='project__prev-slide-layout'
          onClick={() => setSliderState({ slides, active : active < slides.length && active > 0 ? active - 1 : slides.length - 1  })}
        >
          <FontAwesomeIcon icon={faAngleLeft} className='prev-slide'/>
        </button>
        <Slides
          sliderState={sliderState}
          setLayoutState={setLayoutState}
          slider={slider}
          setSliderState={setSliderState}
        />
          <button
            type='button'
            className='project__next-slide-layout'
            onClick={() => setSliderState({ slides, active : active < slides.length - 1 ? active + 1 : 0 })}
          >
          <FontAwesomeIcon icon={faAngleRight} className='next-slide'/>
        </button>
      </div>
      <ul className='photo__nav-container'>
        { sliderState.slides.map((item, i) => <li className={i === sliderState.active ? 'dot active' : 'dot'} key={i}/>) }
      </ul>
    </>
  )
}
