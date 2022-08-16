import { useState, useEffect, useRef } from 'react';
import Job from './Jobs/job-wrapper.js';
import Education from './Education/education.js';
import Project from './Project/project-wrapper.js';
import './css/right-side.css';
import './css/media.css';

const RightSide = ({ moreInfoState, rightSide, setAboutRef }) => {

  const aboutRef = useRef() // Ссылка для скролла вверх (!) только для мобильных устройств

  useEffect(() => { // Ссылку определяем при первичном отрисовке компонента
    setAboutRef(aboutRef)
  }, [])

  return (
    <div className={moreInfoState} ref={aboutRef}>
      <header>
        <h1>Кто я?</h1>
        <p>
          { rightSide.about }
        </p>
      </header>
      <Job
        jobs={rightSide.jobs}
      />
      <Education
        educations={rightSide.education}
      />
      <Project
        homeProject={rightSide.homeProject}
        setAboutRef={setAboutRef}
      />
    </div>
  )
}

export default RightSide;
