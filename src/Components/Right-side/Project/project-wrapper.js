import { useState } from 'react';
import { faGears, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from './Slider/slider.js';
import LargePhoto from './Large-photo/large-photo.js'

const Project = ({ homeProject, setAboutRef }) => {

  const [layoutState, setLayoutState] = useState({ className : 'layout-hidden', data : null })

  return (
    <div className='project__wrapper'>
      <div className='project__title-wrapper'>
        <div className='icon__wrapper pet-project'>
          <FontAwesomeIcon icon={faHouseUser} className='icon'/>
        </div>
        <h3 className='project__title'>Основной домашний проект</h3>
      </div>
      <div className='project__description'>
        <h3>Краткое описание</h3>
        <p>{ homeProject.description }</p>
      </div>
      <div className='project__photo-title'>
        <div className='icon__wrapper'>
          <FontAwesomeIcon icon={faGears} className='icon'/>
        </div>
        <h3 className='project__photo-title'>ФУНКЦИОНАЛ</h3>
      </div>
      <Slider setLayoutState={setLayoutState} slider={homeProject.slider}/>
      <LargePhoto
        layoutState={layoutState}
        setLayoutState={setLayoutState}
      />
    </div>
  )
}

export default Project;
