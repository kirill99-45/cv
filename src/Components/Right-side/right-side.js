import { useState } from 'react';
import Slider from './Slider/slider.js';
import { faGears, faHouseUser, faGraduationCap, faAngleDown, faBriefcase  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './right-side.css';

const RightSide = ({ setLayoutState, slider }) => {

  const [jobState, setJobState] = useState
  (
    { jobs__wrapper : 'jobs__wrapper-hidden', img :  'btn__icon-passive', experience__title : 'overflow: hidden', btnTitle : 'Подробнее'}
  )


  const [educationState, setEducationState] = useState
  (
    { educations__wrapper : 'educations__wrapper-hidden', img :  'btn__icon-passive', education__title : 'hidden', btnTitle : 'Подробнее'}
  )

  const getJob = () => {
    if (jobState.jobs__wrapper === 'jobs__wrapper-visible') {
      setJobState
      (
        { jobs__wrapper : 'jobs__wrapper-hidden', img : 'btn__icon-passive', experience__title : 'hidden', btnTitle : 'Подробнее' }
      )
    } else {
      setJobState(
        { jobs__wrapper : 'jobs__wrapper-visible', img : 'btn__icon-active', experience__title : 'visible', btnTitle : 'Скрыть'}
      )
    }
  }

  const getEducation = () => {
    if (educationState.educations__wrapper === 'educations__wrapper-visible') {
      setEducationState
      (
        { educations__wrapper : 'educations__wrapper-hidden', img : 'btn__icon-passive', education__title : 'hidden', btnTitle : 'Подробнее' }
      )
    } else {
      setEducationState
      (
        { educations__wrapper : 'educations__wrapper-visible', img : 'btn__icon-active', education__title : 'visible', btnTitle : 'Скрыть' }
      )
    }
  }

  return (
    <div className='right-side__wrapper'>
      <header>
        <h1>Кто я?</h1>
        <p>
          Если говорить в общих чертах, то я командный игрок с острым чувством личной ответственности.
          Имею предпринимательский, инвестиционный и управленческий опыт работы. На последней работе управлял инвест
          проектами – согласование бюджета с инвестором, контроль за ремонтом, а также организационные
         (согласование отключения воды/электричества, даты выхода на сделку, условия по сделке и т.д.) и юридические вопросы.
        </p>
      </header>
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
          <li className='job__wrapper'>
            <div className='years__wrapper'>
              <span>2020</span>
              <span>2021</span>
            </div>
            <div className='job-about__wrapper'>
              <span className='job-position'>ПОМОЩНИК ЮРИСТА</span>
              <span className='job-name'>AБ "Sollars"</span>
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
              <span className='job-name'>AН "ПроДом"</span>
              <span className='job-activity'>Работа с инвесторами, ведение собственных проектов, разроботка новых практик, налоговые консультации</span>
            </div>
          </li>
        </ul>
      </div>
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
          <div className='icon__wrapper pet-project'>
            <FontAwesomeIcon icon={faHouseUser} className='icon'/>
          </div>
          <h3 className='project__title'>Домашний проект</h3>
        </div>

        <div className='project__description'>
          <h3>Краткое описание</h3>
          <p>
            Основным проектом, над которым я работал последние 4 месяца является SPA, в котором я
            изучал новое и дотачивал ранее изученное. В данном приложении подключены сторонние библиотеки
            (react-router-dom, axios), есть работа с внешними API (вывод данных о погоде, курсе валют) и
            элементами (iframe). Реализована собственная валидация вводимых пользователем данных и обработка
            выводимых данных на экран. Адаптивная верстка, написанная на flex’ах. Подробнее ниже :)
          </p>
        </div>
        <div className='project__photo-title'>
          <div className='icon__wrapper'>
            <FontAwesomeIcon icon={faGears} className='icon'/>
          </div>
          <h3 className='project__photo-title'>ФУНКЦИОНАЛ</h3>
        </div>
        <Slider setLayoutState={setLayoutState} slider={slider}/>
      </div>
    </div>
  )
}

export default RightSide;
