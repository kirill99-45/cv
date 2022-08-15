import { useState } from 'react';
import Job from './Jobs/job-wrapper.js';
import Education from './Education/education.js';
import Project from './Project/project-wrapper.js';
import './css/right-side.css';

const RightSide = ({ moreInfoState, rightSide }) => {

  return (
    <div className={moreInfoState}>
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
      />
    </div>
  )
}

export default RightSide;
