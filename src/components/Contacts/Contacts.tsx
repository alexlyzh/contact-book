import './Contacts.css';
import {Contact} from '../../store/reducer';
import ContactGroup from '../ContactGroup/ContactGroup';
import ContactCard from '../ContactCard/ContactCard';
import {getGroupedContacts, isEscKeyDown} from '../../utils';
import {useCallback, useEffect, useState} from 'react';
import AddButton from '../AddButton/AddButton';
import Search from '../Search/Search';
import NoContacts from './NoContacts';

type Props = {
  contacts: Contact[],
}

const Contacts = ({contacts}: Props): JSX.Element => {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const groupedContacts = getGroupedContacts(contacts);
  const groups = Object.keys(groupedContacts).sort((a, b) => (a > b) ? 1 : -1);

  const onEscKeyDown = useCallback((evt: KeyboardEvent) => {
    if (isEscKeyDown(evt)) {
      setIsEditingMode(false);
      document.removeEventListener('keydown', onEscKeyDown);
    }
  },[]);

  useEffect(() => {
    isEditingMode && document.addEventListener('keydown', onEscKeyDown);
    return () => document.removeEventListener('keydown', onEscKeyDown);
  }, [isEditingMode, onEscKeyDown]);

  return (
    <form className="contacts">
      <fieldset className="contacts__left-section">
        <legend className="visually-hidden">This is your contacts list</legend>
        <header className="contacts__header">
          <h1 className="contacts__heading">Contacts</h1>
          <AddButton
            isEditingMode={isEditingMode}
            setIsEditingMode={setIsEditingMode}
            contacts={contacts}
          />
          <Search />
        </header>
        <ul className="contact-list">
          {groups.length ?
            groups.map((group) => (
            <ContactGroup
              key={group}
              group={group}
              contacts={groupedContacts[group]}
              setIsEditingMode={setIsEditingMode}
            />
          )) : <NoContacts />}
        </ul>
      </fieldset>
      <fieldset className="contacts__right-section">
        <legend className="visually-hidden">Contact info</legend>
        <ContactCard isEditingMode={isEditingMode} setIsEditingMode={setIsEditingMode}/>

      </fieldset>
    </form>
  );
}

export default Contacts;
