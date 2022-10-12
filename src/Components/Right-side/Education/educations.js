export const Education = ({ educations }) => {

  return educations.map((education, i) => {
    return (
      <li className='education__item-wrapper' key={i}>
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
