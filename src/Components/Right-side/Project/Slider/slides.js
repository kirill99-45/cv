const Slides = ({ sliderState, setLayoutState, setSliderState, slider }) => {

  const showLargePhoto = (item) => {
    setLayoutState({ className : 'layout-visible', data : item.slidesContainer, description : item.description, title : item.title });
    setSliderState({ slides : slider, active: item.id })
  }

  return (
    sliderState.slides.map((item, index) => {
        return (
          <div className={ index === sliderState.active ? 'project__photo-wrapper active' : 'project__photo-wrapper' } key={index}>
            <span className='photo__descritpion'>{item.title}</span>
            <img
              src={item.mainSliderSrc}
              alt='Project photo'
              title='Подробнее'
              onClick={() => showLargePhoto(item)}
            />
          </div>
        )
    })
  )
}

export default Slides;
