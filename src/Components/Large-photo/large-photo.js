import { useEffect } from 'react';
import './large-photo.css';

const LargePhoto = ({ layoutState, setLayoutState }) => {

  const body = document.querySelector('body')

  useEffect(() => {
    const setSlide = (event) => {
      if (event.key === 'Escape') {
        setLayoutState({ className : 'layout-hidden' })
        body.style.position = 'static'
      } else if (event.key === 'ArrowLeft') {
        // Change Slide
      }
    }

    window.addEventListener('keydown', setSlide)

    return () => window.removeEventListener('keydown', setSlide)
  })


  if (layoutState.data) {

    body.style.position = 'fixed' // Фиксация страницы под слайдером

    return (
      <div className={layoutState.className}>
        <div className='close' onClick={() => {setLayoutState({ className : 'layout-hidden' }); body.style.position = 'static'}}/>
        <div className='large-photo__wrapper'>
          <div className='large-photo__screen-wrapper'>
            <h3>{layoutState.title}</h3>
            <div className='screens__container'>
              <div className='screen__next' />
              <div className='screen__large-wrapper'>
                <img src={layoutState.data[0].largeScreen} alt='Large photo'/>
              </div>
              <div className='screens__small'>
                <div className='screen__wrapper'>
                  <img src={layoutState.data[0].smallScreens[0]} alt='Large photo' />
                </div>
                <div className='screen__wrapper'>
                  <img src={layoutState.data[0].smallScreens[1]} alt='Large photo' />
                </div>
              </div>
              <div className='screen__prev' />
            </div>
          </div>
          <div className='large-photo__descritpion-wrapper'>
            <ul className='large-photo__descritpion-activity'>
              <div className='large-photo__activity-description__wrapper'>
                <div className='large-photo__activity-description-icon__wrapper'>
                  <img src='https://cdn-icons-png.flaticon.com/512/7032/7032457.png' alt='icon' />
                </div>
                <h3>ОПИСАНИЕ</h3>
              </div>
              {
                layoutState.description.map(item => {
                  return (
                    <li className='large-photo__steps'>
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

// <ul className='screens__nav-container'>
  // <li className='dot'/>
  // <li className='dot'/>
  // <li className='dot'/>
  // <li className='dot'/>
// </ul>

// {
//   layoutState.description.map(item => {
//   return <pre className='large-photo__steps'>{item}</pre>
//   })
// }
