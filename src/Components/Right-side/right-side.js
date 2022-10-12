import { useState, useEffect, useRef } from 'react';
import { JobWrapper } from './Jobs/job-wrapper.js';
import { EducationWrapper } from './Education/education.js';
import { ProjectWrapper } from './Project/project-wrapper.js';
import './css/right-side.css';
import './css/media.css';

export const RightSide = ({ moreInfoState, rightSide, setAboutRef }) => {

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
      <JobWrapper
        jobs={rightSide.jobs}
      />
      <EducationWrapper
        educations={rightSide.education}
      />
      <ProjectWrapper
        homeProject={rightSide.homeProject}
        setAboutRef={setAboutRef}
      />
    </div>
  )
}
