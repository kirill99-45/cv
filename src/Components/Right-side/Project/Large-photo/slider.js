const Slider = ({ slides, slide }) => {

  return (
    <div className='screens__container'>
      {
        slides.map((item, index) => {
          if (index === slide) {
            return (
              <>
              <div className='screen__large-wrapper'>
                <img src={item.src} alt='Large photo' />
                <span className='screen__description'>{item.title}</span>
              </div>
            </>
            )
          }
        })
      }
      <span className='screen__counter'>{slide + 1} из {slides.length}</span>
    </div>
  )
}

export default Slider;
