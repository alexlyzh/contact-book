import './ContactsScreen.css'
import {useDispatch, useSelector} from 'react-redux';
import {getContacts, getSelectedContact} from '../../store/selectors';
import {RequestStatus} from '../../store/reducer';
import {useEffect} from 'react';
import {APIAction} from '../../store/api-acitons';
import Contacts from '../Contacts/Contacts';

const ContactsScreen = (): JSX.Element => {
  const contactsData = useSelector(getContacts);
  const selectedContact = useSelector(getSelectedContact);
  const dispatch = useDispatch();

  const shouldLoadContacts = contactsData.requestStatus === RequestStatus.IDLE;

  useEffect(() => {
    if (shouldLoadContacts) {
      dispatch(APIAction.getContacts());
    }
  }, [shouldLoadContacts, dispatch]);

  useEffect(() => {
    if (!selectedContact) {
      dispatch(APIAction.getSelectedContact());
    }
  }, [selectedContact, dispatch]);

  return (
    <div className="page">
      <main className="contact-book container">
        <Contacts contacts={contactsData.data}/>
      </main>
    </div>
  );
}

export default ContactsScreen;
