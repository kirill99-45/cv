import { useEffect, useState } from 'react';
import Slider from './slider.js';
import Dotts from './../Right-side/Slider/dotts.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import './large-photo.css';

const LargePhoto = ({ layoutState, setLayoutState }) => {

  const body = document.querySelector('body')


  useEffect(() => {
    const setSlide = (event) => {
      if (event.key === 'Escape') {
        setLayoutState({ className : 'layout-hidden' })
        body.style.position = 'static'
      }
    }

    window.addEventListener('keydown', setSlide)

    return () => window.removeEventListener('keydown', setSlide)
  })

  if (layoutState.data) {
    body.style.position = 'fixed' // Фиксация страницы под слайдером

    return (
      <div className={layoutState.className}>
        <div className='large-photo__wrapper'>
          <div className='large-photo__screen-wrapper'>
            <h3>{layoutState.title}</h3>
            <Slider
              slides={layoutState.data}
            />
          </div>
          <div className='large-photo__descritpion-wrapper'>
            <ul className='large-photo__descritpion-activity'>
              <div className='large-photo__activity-description__wrapper'>
                <div className='large-photo__activity-description-icon__wrapper'>
                  <FontAwesomeIcon icon={faListCheck} />
                  <FontAwesomeIcon icon={faXmark} className='close' onClick={() => {setLayoutState({ className : 'layout-hidden' }); body.style.position = 'static'}}/>
                </div>
                <h3>ОПИСАНИЕ</h3>
              </div>
              {
                layoutState.description.map(item => {
                  return (
                    <li className='large-photo__steps'>
                      <h4>{item.title ? item.title : '' }</h4>
                      <span>{item.body}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default LargePhoto;
