import './left-side.css';

const LeftSide = () => {

  return (
    <div className='left-side__wrapper'>
      <div className='photo__wrapper'>
        <img src='https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album' alt='My photo'/>
        <div className='photo__info-wrapper'>
          <span>Кирилл Рогов</span>
          <span>Junior Frontend Developer</span>
        </div>
      </div>
      <div className='skills__wrapper'>
        <div className='software__wrapper'>
          <span>SOFTWARE</span>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
          </ul>
        </div>
        <div className='soft-skills__wrapper'>
          <span>SOFT SKILLS</span>
          <ul>
            <li className='skill__wrapper'>
              Team work
            </li>
            <li className='skill__wrapper'>
              Creativy
            </li>
            <li className='skill__wrapper'>
              Managment
            </li>
            <li className='skill__wrapper'>
              Communication
            </li>
            <li className='skill__wrapper'>
              Organization
            </li>
            <li className='skill__wrapper'>
              Presentation
            </li>
          </ul>
        </div>
        <div className='contacts__wrapper'>
          <span className='contacts__title'>LET'S KEEP IN TOUCH</span>
          <ul>
            <li className='contact__wrapper'>
              <div className='img__wrapper'>
                <img src='https://cdn-icons-png.flaticon.com/512/455/455705.png' alt='icon' />
              </div>
              <span><a href='tel:+89039126358' type='phone'>8-903-912-63-58</a></span>
            </li>
            <li className='contact__wrapper'>
              <div className='img__wrapper'>
                <img src='https://cdn-icons-png.flaticon.com/512/2111/2111708.png' alt='icon' />
              </div>
              <span><a href='https://t.me/kirill99_45' target='_blank'>t.me/kirill99_45</a></span>
            </li>
            <li className='contact__wrapper'>
              <div className='img__wrapper'>
                <img src='https://cdn-icons-png.flaticon.com/512/25/25657.png' alt='icon' />
              </div>
              <span><a href='https://github.com/kirill99-45' target='_blank'>@kirill99-45</a></span>
            </li>
            <li className='contact__wrapper'>
              <div className='img__wrapper'>
                <img src='https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1659450488~hmac=2d6849ace2f7d8ee4802db4ffaa3ac35' alt='icon' />
              </div>
              <span><a href='https://vk.com/im?sel=270124671' target='_blank'>kirill99_45@mail.ru</a></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LeftSide;
