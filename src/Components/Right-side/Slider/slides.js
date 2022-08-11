const Slides = ({ sliderState, setLayoutState, setSliderState, slider }) => {

  const showLargePhoto = (item) => {
    setLayoutState({ className : 'layout-visible', data : item.slidesContainer, description : item.description, title : item.title });
    setSliderState({ slides : slider, active: item.id })
  }

  return (
    sliderState.slides.map((item, index) => {
        return (
          <div className={ index === 1 ? 'project__photo-wrapper active' : 'project__photo-wrapper' } key={index}>
            <img
              src={item.mainSliderSrc}
              alt='Project photo'
              title={item.title}
              onClick={ index === 1 ? () => showLargePhoto(item) : () => console.log(slider) }
            />
          </div>
        )
    })
  )
}

export default Slides;
