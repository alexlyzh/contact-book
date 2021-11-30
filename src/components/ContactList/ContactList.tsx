import './ContactList.css';
import {Contact} from '../../store/reducer';
import ContactGroup from '../ContactGroup/ContactGroup';

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

export default function ContactList({contacts}: Props): JSX.Element {

  const groupedContacts = getGroupedContacts(contacts);
  const groups = Object.keys(groupedContacts).sort((a, b) => (a > b) ? 1 : -1);

  return (
    <ul className="contact-list">
      { groups.map((group) => <ContactGroup key={group} group={group} contacts={groupedContacts[group]}/>) }
    </ul>
  );
}
