import './ContactsScreen.css'
import Footer from '../Footer/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {getContacts} from '../../store/selectors';
import {RequestStatus} from '../../store/reducer';
import {useEffect} from 'react';
import {APIAction} from '../../store/api-acitons';
import ContactList from '../ContactList/ContactList';

export default function ContactsScreen(): JSX.Element {
  const contactsData = useSelector(getContacts);
  const dispatch = useDispatch();

  const shouldLoadContacts = contactsData.requestStatus === RequestStatus.IDLE;

  useEffect(() => {
    if (shouldLoadContacts) {
      dispatch(APIAction.getContacts());
    }
  }, [shouldLoadContacts, dispatch]);

  return (
    <div className="page">
      <header>
        <h1 className="visually-hidden">Contacts</h1>
      </header>
      <main className="contact-book container">
        <ContactList contacts={contactsData.data}/>
      </main>
      <Footer/>
    </div>
  );
}
