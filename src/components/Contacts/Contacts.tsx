import './Contacts.css';
import {useState} from 'react';
import {Contact} from '../../store/reducer';
import ContactGroup from '../ContactGroup/ContactGroup';
import ContactCard from '../ContactCard/ContactCard';


type Props = {
  contacts: Contact[],
}

type GroupedContacts = {
  [key: string]: Contact[],
}

const getGroupedContacts = (contacts: Contact[]): GroupedContacts => {
  const groupedContacts: GroupedContacts = {};

  contacts.forEach((contact) => {
    const firstLetter = contact.name[0];
    if (firstLetter in groupedContacts) {
      groupedContacts[firstLetter].push(contact);
      return;
    }
    groupedContacts[firstLetter] = [contact];
  });

  return groupedContacts;
};

export default function Contacts({contacts}: Props): JSX.Element {

  const groupedContacts = getGroupedContacts(contacts);
  const groups = Object.keys(groupedContacts).sort((a, b) => (a > b) ? 1 : -1);

  const [activeContactId, setActiveContactId] = useState<number | null>(null);

  return (
    <form className="contacts">
      <fieldset className="contacts__left-section">
        <legend className="visually-hidden">This is your contacts list</legend>
        <header className="contacts__list-heading">
          <h1>Contacts</h1>
          <button className="contacts__add-button" type="button">
            <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485 485" xmlSpace="preserve">
              <polygon points="485,227.5 257.5,227.5 257.5,0 227.5,0 227.5,227.5 0,227.5 0,257.5 227.5,257.5 227.5,485 257.5,485 257.5,257.5 485,257.5 "/>
            </svg>
          </button>
        </header>
        <ul className="contact-list">
          { groups.map((group) => (
            <ContactGroup
              key={group}
              group={group}
              contacts={groupedContacts[group]}
              activeContactId={activeContactId}
              setActiveContactId={setActiveContactId}
            />
          )) }
        </ul>
      </fieldset>
      <fieldset className="contacts__right-section">
        <legend className="visually-hidden">Contact info</legend>
        <ContactCard
          contact={contacts
            .find((contact) => contact.id === activeContactId)
          }
        />
      </fieldset>
    </form>
  );
}
