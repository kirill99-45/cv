import { useState, useEffect, useRef } from 'react';
import { MainInfoWrapper } from './Skills/skills-wrapper.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft, faAnglesDown, faAnglesUp, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './css/left-side.css';
import './css/media.css';

export const LeftSide = ({ moreInfoState, setMoreInfoState, leftSide, aboutRef }) => {

  const [arrowIcon, setArrowIcon] = useState(faEllipsis)

  const firstDirection = () => {
    setArrowIcon(window.screen.width > 490 ? faAnglesRight : faAnglesDown)
  }

  const lastDirection = () => {
    setArrowIcon(window.screen.width > 490 ? faAnglesLeft : faAnglesUp)
  }

  const photoRef = useRef()

  const [timer, setTimer] = useState({ state : false, ref : null })
  const [seconds, setSeconds] = useState(3)

  useEffect(() => {
    if (seconds > 0 && timer.state) {
      setTimer({ ...timer, state : false})
      setTimeout(setSeconds, 100, seconds - 1)
    } else if (seconds < 3 && !timer.state) {
      timer.ref.current.scrollIntoView({ behavior : 'smooth', block : 'start', inline : 'center' })
      setSeconds(3)
    }
  }, [timer.state, seconds])

  useEffect(() => {
    firstDirection()
  }, [setArrowIcon])

  const showMoreInfo = () => {
    if (moreInfoState === 'right-side__wrapper hidden') {
      setMoreInfoState('right-side__wrapper visible')
      setArrowIcon(lastDirection)
      setTimer({ state : true, ref : aboutRef })
    } else {
      setTimer({ state : true, ref : photoRef })
      setMoreInfoState('right-side__wrapper hidden')
      setArrowIcon(firstDirection)
    }
  }

  return (
    <div className='left-side__wrapper' ref={photoRef}>
      <FontAwesomeIcon icon={arrowIcon} className='left-side__btn' onClick={showMoreInfo} title='Подробнее'/>
      <div className='photo__wrapper'>
        <img src={leftSide.photo} alt='My photo' />
        <div className='photo__info-wrapper'>
          <span>{leftSide.name}</span>
          <span>{leftSide.position}</span>
        </div>
      </div>
      <MainInfoWrapper skills={leftSide.skills} contacts={leftSide.contacts}/>
    </div>
  )
}
