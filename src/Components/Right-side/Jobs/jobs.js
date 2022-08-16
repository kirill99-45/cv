const Jobs = ({ jobs }) => {
    return jobs.map((job, i) => {
      return (
        <li className='job__wrapper' key={i}>
          <div className='years__wrapper' title={job.yearsTitle}>
            <span>{job.years[0]}</span>
            <span>{job.years[1]}</span>
          </div>
          <div className='job-about__wrapper'>
            <span className='job-position'>{job.position}</span>
            <span className='job-name'>{job.company}</span>
            <span className='job-activity'>{job.activity}</span>
          </div>
        </li>
      )
    })
}

export default Jobs;
