import { useState } from 'react';
import { Education } from './educations.js';
import { faAngleDown, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EducationWrapper = ({ educations }) => {

  const [educationState, setEducationState] = useState({
    educations__wrapper : 'educations__wrapper-hidden',
    img :  'btn__icon-passive',
    education__title : 'hidden',
    btnTitle : 'Подробнее',
  })

  const getEducation = () => { // Управление состоянием
    if (educationState.educations__wrapper === 'educations__wrapper-visible') {
      setEducationState({
        educations__wrapper : 'educations__wrapper-hidden',
        img : 'btn__icon-passive',
        education__title : 'hidden',
        btnTitle : 'Подробнее',
      })
    } else {
      setEducationState({
        educations__wrapper : 'educations__wrapper-visible',
        img : 'btn__icon-active',
        education__title : 'visible',
        btnTitle : 'Скрыть'
      })
    }
  }

  return (
    <div className='education__wrapper'>
        <div className='education__title' style={{ overflow : educationState.education__title }}>
          <div className='education-img__wrapper'>
            <FontAwesomeIcon icon={faGraduationCap} className='icon'/>
          </div>
          <h3>ОБРАЗОВАНИЕ</h3>
          <div className='btn__wrapper' onClick={getEducation}>
            <button type='button' className='btn__open-additional-info'>{educationState.btnTitle}</button>
            <FontAwesomeIcon icon={faAngleDown} className={educationState.img} />
          </div>
        </div>
      <ul className={educationState.educations__wrapper}>
        <Education educations={educations}/>
      </ul>
    </div>
  )
}
