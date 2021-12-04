import './Contacts.css';
import {Contact} from '../../store/reducer';
import ContactGroup from '../ContactGroup/ContactGroup';
import ContactCard from '../ContactCard/ContactCard';
import ContactCardEmpty from '../ContactCardEmpty/ContactCardEmpty';
import {getGroupedContacts} from '../../utils';
import {useSelector} from 'react-redux';
import {getSelectedContact} from '../../store/selectors';

type Props = {
  contacts: Contact[],
}

export default function Contacts({contacts}: Props): JSX.Element {
  const selectedContact = useSelector(getSelectedContact);

  const groupedContacts = getGroupedContacts(contacts);
  const groups = Object.keys(groupedContacts).sort((a, b) => (a > b) ? 1 : -1);

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
            />
          )) }
        </ul>
      </fieldset>
      <fieldset className="contacts__right-section">
        <legend className="visually-hidden">Contact info</legend>
        {selectedContact ? <ContactCard contact={selectedContact}/> : <ContactCardEmpty/>}
      </fieldset>
    </form>
  );
}
