import { useState } from 'react';
import { faAngleDown, faBriefcase  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Jobs from './jobs.js';

const Job = ({ jobs }) => {

  const [jobState, setJobState] = useState // Состояние раздела опыт работы
  (
    {
      jobs__wrapper : 'jobs__wrapper-hidden',
      img :  'btn__icon-passive',
      experience__title : 'overflow: hidden',
      btnTitle : 'Подробнее'
    }
  )

  const getJob = () => { // Управление состоянием
    if (jobState.jobs__wrapper === 'jobs__wrapper-visible') {
      setJobState
      (
        {
          jobs__wrapper : 'jobs__wrapper-hidden',
          img : 'btn__icon-passive',
          experience__title : 'hidden',
          btnTitle : 'Подробнее'
        }
      )
    } else {
      setJobState(
        {
          jobs__wrapper : 'jobs__wrapper-visible',
          img : 'btn__icon-active',
          experience__title : 'visible',
          btnTitle : 'Скрыть'
        }
      )
    }
  }

  return (
    <div className='experience__wrapper'>
      <div className='experience__title' style={{ overflow : jobState.experience__title }}>
        <div className='experience-img__wrapper'>
          <FontAwesomeIcon icon={faBriefcase} className='icon'/>
        </div>
        <h3>ОПЫТ РАБОТЫ</h3>
        <div className='btn__wrapper' onClick={getJob}>
          <button type='button' className='btn__open-additional-info'>{jobState.btnTitle}</button>
          <FontAwesomeIcon icon={faAngleDown} className={jobState.img}/>
        </div>
      </div>
      <ul className={jobState.jobs__wrapper}>
        <Jobs jobs={jobs}/>
      </ul>
    </div>
  )
}

export default Job;
