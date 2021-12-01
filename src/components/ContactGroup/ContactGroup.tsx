import './ContactGroup.css'
import {Contact} from '../../store/reducer';
import {useState} from 'react';

type Props = {
  group: string,
  contacts: Contact[],
  activeContactId: number | null,
  setActiveContactId: (id: number) => void,
}

export default function ContactGroup({group, contacts, activeContactId, setActiveContactId}: Props): JSX.Element {
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
    <li>
      <div className="group">
        <p className="group-name">{group}</p>
      </div>
      <ul>
        {sortedContacts.map((contact) => (
          <li className="contact-name" key={contact.id}>
            <button
              className={`contact-name__button ${(contact.id === activeContactId) ? 'contact-name__button--active' : ''}`}
              onClick={(evt) => {
                evt.preventDefault();
                setActiveContactId(contact.id);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
}
