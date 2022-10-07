import { Contacts } from './contacts-wrapper.js';

export const MainInfoWrapper = ({ skills, contacts }) => {

  const Skill = ({ skills }) => skills.map((skill, i) => <li className='skill' key={i}>{skill}</li>)

  return (
    <div className='skills__wrapper'>
      <div className='skill__wrapper'>
        <span className='skill__title'>HARD SKILLS</span>
        <ul className='skill__container'>
          <Skill skills={skills.hardSkills}/>
        </ul>
      </div>
      <div className='skill__wrapper'>
        <span className='skill__title'>ЯЗЫКИ</span>
        <ul className='skill__container'>
          <Skill skills={skills.languages}/>
        </ul>
      </div>
      <div className='skill__wrapper'>
        <span className='skill__title'>SOFT SKILLS</span>
        <ul className='skill__container'>
          <Skill skills={skills.softSkills}/>
        </ul>
      </div>
      <Contacts contacts={contacts} />
    </div>
  )
}
