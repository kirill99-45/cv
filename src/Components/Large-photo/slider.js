import { useState, useEffect } from 'react';

const Slider = ({ slides }) => {

  const [slide, setSlideState] = useState(0)

  const nextScreen = () => {
    setSlideState(slide < (slides.length - 1)  ? slide + 1 : 0)
  }

  const prevScreen = () => {
    setSlideState(slide < (slides.length) && slide > 1 ? slide - 1 : slides.length - 1)
  }

  useEffect(() => {
    const setSlide = (event) => {
      if (event.key === 'ArrowLeft') {
        prevScreen()
      } else if (event.key === 'ArrowRight') {
        nextScreen()
      }
    }

    window.addEventListener('keydown', setSlide)

    return () => {
      window.removeEventListener('keydown', setSlide)
    }
  })

  return (
    <div className='screens__container'>
      {
        slides.map((item, index) => {
          if (index === slide) {
            console.log(item);
            return (
              <>
                <button type='button' className='screen__prev' onClick={nextScreen}/>
                <div className='screen__large-wrapper'>
                  <img src={item.src} alt='Large photo' title={item.title}/>
                </div>
                <button type='button' className='screen__next' onClick={prevScreen}/>
              </>
            )
          }
        })
      }
    </div>
  )
}

export default Slider;
