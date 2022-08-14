const Educations = ({ educations }) => {

  return educations.map(education => {
    return (
      <li className='education__item-wrapper'>
        <div className='years__wrapper' title={education.yearsTitle}>
          <span>{education.years[0]}</span>
          <span>{education.years[1]}</span>
        </div>
        <div className='education-about__wrapper'>
          <span className='education-name'>{education.university}</span>
          <span className='education-activity'>{education.activity}</span>
        </div>
      </li>
    )
  })
}

export default Educations;
