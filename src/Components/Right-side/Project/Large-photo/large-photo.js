import { useEffect, useState } from 'react';
import Slider from './slider.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faXmark, faBars, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './css/large-photo.css';
import './css/media.css';

const LargePhoto = ({ layoutState, setLayoutState }) => {

  const [descriptionState, setDescriptionState] = useState('') // Состояние описания

  const body = document.querySelector('body') // Для устранения возможности скролла страницы под млдальным окном

  const [slide, setSlideState] = useState(0) // Состояние слайдера

  useEffect(() => { // Определяем первичное состояние для описания слайдера в зависимости от ширины экрана пользователя
    setDescriptionState(window.screen.width > 640 ? 'large-photo__descritpion-wrapper__hidden' : 'large-photo__descritpion-wrapper__open')
  }, [])

  const showMoreInfo = () => { // Управление состоянием описания (!) работает только для утройств, ширина экрана которых, меньше 640рх
    setDescriptionState(descriptionState === 'large-photo__descritpion-wrapper__open' ? 'large-photo__descritpion-wrapper__hidden' : 'large-photo__descritpion-wrapper__open')
  }

  useEffect(() => { // Отслеживаем клики вне описания для того, чтобы скрыть его
    const isOpenDescription = (event) => {
      if (descriptionState === 'large-photo__descritpion-wrapper__open') {
        const description = event.target.closest('.large-photo__descritpion-wrapper__open')
        const menu = event.target.closest('.large-photo__burger') // Нужно для того, чтобы можно было открыть само описание
        if (!menu && !description)
        setDescriptionState('large-photo__descritpion-wrapper__hidden')
      }
    }
    window.addEventListener('click', isOpenDescription)

    return () => { // Отписываемся от прослушки события
      window.removeEventListener('click', isOpenDescription)
    }
  })

  useEffect(() => { // Отслеживаем килки вне модального окна, чтобы скрыть его
    const isOpenLarge = (event) => {
      if (layoutState.className === 'layout-visible') {
        const largePhoto = event.target.closest('.large-photo__wrapper')
        const slide = event.target.closest('.project__photo-wrapper') // Нужно для того, чтобы можно было открыть само модальное окно
        if (!largePhoto && !slide) {
          setLayoutState({ className : 'layout-hidden' })
          setSlideState(0)
          body.style.position = 'static'
        }
      }
    }
    window.addEventListener('click', isOpenLarge)

    return () => { // Отписываемся от прослушки события
      window.removeEventListener('click', isOpenLarge)
    }
  })

  useEffect(() => { // Использование клавиатуры для смены слайдов / закрытия модального окна
    const setSlide = (event) => {
      if (event.key === 'ArrowLeft') {
        setSlideState(slide < (layoutState.data.length) && slide > 1 ? slide - 1 : layoutState.data.length - 1 )
      } else if (event.key === 'ArrowRight') {
        setSlideState( slide < (layoutState.data.length - 1)  ? slide + 1 : 0)
      } else if (event.key === 'Escape') {
        setLayoutState({ className : 'layout-hidden' })
        setSlideState(0)
        body.style.position = 'static'
      }
    }

    window.addEventListener('keydown', setSlide)

    return () => { // Отписываемся от прослушки события
      window.removeEventListener('keydown', setSlide)
    }
  })

  if (layoutState.data) { // Компонент добавляется на страницу только при условии, если там есть данные,
                         //которые приходят туда после клика по нужной картинке в основном слайдере
    body.style.position = 'fixed' // Фиксация страницы под слайдером
    return (
      <div className={layoutState.className}>
        <div className='large-photo__wrapper'>
          <div className='large-photo__screen-wrapper'>
            <div className='large-photo__screen-header'>
              <FontAwesomeIcon icon={faBars} className='large-photo__burger' size='lg' onClick={showMoreInfo}/>
              <FontAwesomeIcon icon={faXmark} className='phone__close' size='lg' onClick={() => {setLayoutState({ className : 'layout-hidden' }); body.style.position = 'static'}}/>
              <h3>{layoutState.title}</h3>
            </div>
            <button type='button' onClick={() => setSlideState(slide < (layoutState.data.length) && slide > 1 ? slide - 1 : layoutState.data.length - 1 )} className='screen__prev-layout'>
              <FontAwesomeIcon icon={faAngleLeft} className='screen__prev'/>
            </button>
            <Slider slides={layoutState.data} slide={slide}/>
            <button type='button'onClick={() => setSlideState( slide < (layoutState.data.length - 1)  ? slide + 1 : 0)} className='screen__next-layout'>
              <FontAwesomeIcon icon={faAngleRight} className='screen__next'/>
            </button>
          </div>
          <div className={descriptionState}>
            <ul className='large-photo__descritpion-activity'>
              <div className='large-photo__activity-description__wrapper'>
                <div className='large-photo__activity-description-icon__wrapper'>
                  <FontAwesomeIcon icon={faListCheck} />
                  <FontAwesomeIcon icon={faXmark} className='close' size='lg' onClick={() => {setLayoutState({ className : 'layout-hidden' }); body.style.position = 'static'}}/>
                </div>
                <h3>ОПИСАНИЕ</h3>
              </div>
              {
                layoutState.description.map((item, i) => {
                  return (
                    <li className='large-photo__steps' key={i}>
                      <h4>{item.title ? item.title : '' }</h4>
                      <span>{item.body}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default LargePhoto;
