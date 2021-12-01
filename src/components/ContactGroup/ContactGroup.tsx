import './ContactGroup.css'
import {Contact} from '../../store/reducer';

type Props = {
  group: string,
  contacts: Contact[],
}

export default function ContactGroup({group, contacts}: Props): JSX.Element {
  const sortedContacts = [...contacts].sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  return(
    <li><p className="group-name">{group}</p>
      <ul>
        {sortedContacts.map((contact) => (
          <li className="contact-name" key={contact.id}>
            <input className="contact-name__radio visually-hidden" id={`contact-name-${contact.id}`} type="radio" name="contact-name"/>
            <label className="contact-name__label" htmlFor={`contact-name-${contact.id}`}>{contact.name}</label>
          </li>
        ))}
      </ul>
    </li>
  );
}
