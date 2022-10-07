import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contacts = ({ contacts }) => {

  const icons = [faTelegram, faGithub, faPhone, faEnvelope]

  const getIcon = (icon) => {
    for (let i = 0; i < icons.length; i++) {
      if (icons[i].iconName === icon) {
        return icons[i]
      }
    }
  }

  const Contact = ({ contact }) => {
    return (
      <li>
        <a
          href={contact.link}
          type={contact.type}
          target={contact.target}
          className='contacts__btn'
        >
        <FontAwesomeIcon icon={getIcon(contact.icon)} className='img__wrapper'/>
        <span className='contacts__title'>{contact.title}</span>
        </a>
      </li>
    )
  }

  return (
    <div className='skill__wrapper'>
      <span className='skill__title'>КОНТАКТЫ</span>
      <ul className='skill__container contacts'>
        {
          contacts.map(contact => <Contact contact={contact}/>)
        }
      </ul>
    </div>
  )
}
