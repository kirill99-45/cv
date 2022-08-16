import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Skills = ({ skills, contacts }) => {

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
        <span className='skill__title'>SOFT SKILLS</span>
        <ul className='skill__container'>
          <Skill skills={skills.softSkills}/>
        </ul>
      </div>
      <div className='skill__wrapper'>
        <span className='skill__title'>КОНТАКТЫ</span>
        <ul className='skill__container contacts'>
          <li>
            <FontAwesomeIcon icon={faPhone} className='img__wrapper'/>
            <span><a href='tel:+89039126358' type='phone'>{contacts[0]}</a></span>
          </li>
          <li>
            <FontAwesomeIcon icon={faTelegram} className='img__wrapper'/>
            <span><a href='https://t.me/kirill99_45' target='_blank'>{contacts[1]}</a></span>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} className='img__wrapper'/>
            <span><a href='https://github.com/kirill99-45' target='_blank'>{contacts[2]}</a></span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className='img__wrapper'/>
            <span><a href='https://vk.com/im?sel=270124671' target='_blank'>{contacts[3]}</a></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills;
