import { useState } from 'react';
import Slider from './Slider/slider.js';
import './right-side.css';

const RightSide = ({ setLayoutState, slider }) => {

  const [jobState, setJobState] = useState({ jobs__wrapper : 'jobs__wrapper-hidden', img :  'btn__icon-passive', experience__title : 'overflow: hidden'})
  const [educationState, setEducationState] = useState({ educations__wrapper : 'educations__wrapper-hidden', img :  'btn__icon-passive', education__title : 'hidden'})

  const getJob = () => {
    if (jobState.jobs__wrapper === 'jobs__wrapper-visible') {
      setJobState({ jobs__wrapper : 'jobs__wrapper-hidden', img : 'btn__icon-passive', experience__title : 'hidden' })
    } else {
      setJobState({ jobs__wrapper : 'jobs__wrapper-visible', img : 'btn__icon-active', experience__title : 'visible' })
    }
  }

  const getEducation = () => {
    if (educationState.educations__wrapper === 'educations__wrapper-visible') {
      setEducationState({ educations__wrapper : 'educations__wrapper-hidden', img : 'btn__icon-passive', education__title : 'hidden' })
    } else {
      setEducationState({ educations__wrapper : 'educations__wrapper-visible', img : 'btn__icon-active', education__title : 'visible' })
    }
  }

  return (
    <div className='right-side__wrapper'>
      <header>
        <h1>ОБО МНЕ</h1>
        <p>Мне 23 года, занимаюсь разработкой с конца прошлого года.
          Программирование зацепило множеством факторов, во-первых, бесконечными возможностями
          в развитии себя как профессионала, так личности. Во-вторых, возможность участвовать
          в создании продуктов, которые будут влиять на жизни людей. В-третьих, своим
          открытым сообществом, благодаря которому, ты всегда уверен, что найдешь ответ на любой
          свой вопрос, а если не найдешь, то подскажут где искать.
        </p>
      </header>
      <div className='experience__wrapper'>
        <div className='experience__title' style={{ overflow : jobState.experience__title }}>
          <div className='experience-img__wrapper'>
            <img src='https://cdn-icons-png.flaticon.com/512/2910/2910791.png' alt='icon'/>
          </div>
          <h3>ОПЫТ РАБОТЫ</h3>
          <div className='btn__wrapper' onClick={getJob}>
            <button type='button' className='btn__open-additional-info'>Read more</button>
            <img src='https://cdn-icons.flaticon.com/png/512/656/premium/656979.png?token=exp=1659508198~hmac=dfd831ed3d640bf3c2d30276a35ac17a' className={jobState.img}/>
          </div>
        </div>
        <ul className={jobState.jobs__wrapper}>
          <li className='job__wrapper'>
            <div className='years__wrapper'>
              <span>2020</span>
              <span>2021</span>
            </div>
            <div className='job-about__wrapper'>
              <span className='job-position'>ПОМОЩНИК ЮРИСТА</span>
              <span className='job-name'>AБ Sollars</span>
              <span className='job-activity'>Документооборот, составление договоров, претензий, участие в судебных заседаниях</span>
            </div>
          </li>
          <li className='job__wrapper'>
            <div className='years__wrapper'>
              <span>2021</span>
              <span>2022</span>
            </div>
            <div className='job-about__wrapper'>
              <span className='job-position'>АГЕНТ ПО НЕДВИЖИМОСТИ</span>
              <span className='job-name'>AН ПроДом</span>
              <span className='job-activity'>Работа с инвесторами, ведение собственных проектов, разроботка новых практик, налоговые консультации</span>
            </div>
          </li>
        </ul>
      </div>
      <div className='education__wrapper'>
          <div className='education__title' style={{ overflow : educationState.education__title }}>
            <div className='education-img__wrapper'>
              <img src='https://cdn-icons-png.flaticon.com/512/1940/1940611.png' alt='icon'/>
            </div>
            <h3>ОБРАЗОВАНИЕ</h3>
            <div className='btn__wrapper' onClick={getEducation}>
              <button type='button' className='btn__open-additional-info'>Read more</button>
              <img src='https://cdn-icons.flaticon.com/png/512/656/premium/656979.png?token=exp=1659508198~hmac=dfd831ed3d640bf3c2d30276a35ac17a' className={educationState.img}/>
            </div>
          </div>
        <ul className={educationState.educations__wrapper}>
            <li className='education__item-wrapper'>
            <div className='years__wrapper'>
              <span>2017</span>
              <span>2021</span>
            </div>
            <div className='education-about__wrapper'>
              <span className='education-name'>НГУ</span>
              <span className='education-activity'>Юрист в сфере частного права</span>
            </div>
          </li>
          <li className='education__item-wrapper'>
            <div className='years__wrapper'>
              <span>2021</span>
              <span>now</span>
            </div>
            <div className='education-about__wrapper'>
              <span className='education-name'>САМООБРАЗОВАНИЕ</span>
              <span className='education-activity'>Frontend science</span>
            </div>
          </li>
        </ul>
      </div>
      <div className='project__wrapper'>
        <div className='project__title-wrapper'>
          <div className='icon__wrapper'>
            <img src='https://cdn-icons.flaticon.com/png/512/2048/premium/2048555.png?token=exp=1659450509~hmac=8e039b0c7e14a31ab904cbcc60a43cc9' alt='icon'/>
          </div>
          <h3 className='project__title'>Домашний проект</h3>
        </div>
        <p className='project__description'>
          Мне 23 года, занимаюсь разработкой с конца прошлого года. Программирование зацепило множеством факторов,
          во-первых, бесконечными возможностями в развитии себя как профессионала, так личности.
          Во-вторых, возможность участвовать в создании продуктов, которые будут влиять на жизни людей.
          В-третьих, своим открытым сообществом, благодаря которому, ты всегда уверен, что найдешь ответ
          на любой свой вопрос, а если не найдешь, то подскажут где искать.
        </p>
        <div className='project__photo-title'>
          <div className='icon__wrapper'>
            <img src='https://cdn-icons-png.flaticon.com/512/6565/6565332.png' alt='icon' />
          </div>
          <h3 className='project__photo-title'>ФУНКЦИОНАЛ</h3>
        </div>
        <Slider setLayoutState={setLayoutState} slider={slider}/>
      </div>
    </div>
  )
}

export default RightSide;
