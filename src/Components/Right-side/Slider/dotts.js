const Dotts = ({ sliderState }) => {

  console.log(sliderState);

  return (
    sliderState.slides.map((item, index) => {
      return (
        <li className={ index + 1 === sliderState.active ? 'dot active' : 'dot' }/>
      )
    })
  )
}

export default Dotts;
