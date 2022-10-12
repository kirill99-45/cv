export const Jobs = ({ jobs }) => {

  return jobs.map((job, i) => {
    return (
      <li className='job__wrapper' key={i}>
        <div className='years__wrapper' title={job.yearsTitle}>
          { job.years.map(year => <span>{year}</span>) }
        </div>
        <div className='job-about__wrapper'>
          <span className='job-position'>{job.position}</span>
          <span className='job-name'>{job.company}</span>
          <ul className='job-activity'>
            {
              job.activity.map((activity, i) => {
                return typeof(activity) === 'string' ?
                  <li key={i} className='activity__default' number={`${i + 1}.`}>{activity}</li> :
                  <>
                    <li className='activity__title' number={`${i + 1}.`}>{activity.title}</li>
                    <li className='activity__descriprion'>{activity.description}</li>
                  </>
              })
            }
          </ul>
        </div>
      </li>
    )
  })
}
