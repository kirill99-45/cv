import { useState, useEffect } from 'react';
import Skills from './Skills/skills-wrapper.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft, faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import './css/left-side.css';
import './css/media.css';

const LeftSide = ({ moreInfoState, setMoreInfoState, leftSide }) => {

  const [arrowIcon, setArrowIcon] = useState(faAnglesRight)

  useEffect(() => {
    if (window.screen.width > 490) {
      setArrowIcon(faAnglesRight)
    } else {
      setArrowIcon(faAnglesDown)
    }
  }, [])

  const showMoreInfo = () => {
    setMoreInfoState(moreInfoState === 'right-side__wrapper visible' ? 'right-side__wrapper hidden' : 'right-side__wrapper visible')
    setArrowIcon(moreInfoState === 'right-side__wrapper visible' ?  faAnglesRight : faAnglesLeft)
  }

  return (
    <div className='left-side__wrapper'>
      <FontAwesomeIcon icon={arrowIcon} className='left-side__btn' onClick={showMoreInfo} title='Подробнее'/>
      <div className='photo__wrapper'>
        <img src={leftSide.photo} alt='My photo'/>
        <div className='photo__info-wrapper'>
          <span>{leftSide.name}</span>
          <span>{leftSide.position}</span>
        </div>
      </div>
      <Skills skills={leftSide.skills} contacts={leftSide.contacts}/>
    </div>
  )
}

export default LeftSide;
