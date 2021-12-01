import './ContactsScreen.css'
import {useDispatch, useSelector} from 'react-redux';
import {getContacts} from '../../store/selectors';
import {RequestStatus} from '../../store/reducer';
import {useEffect} from 'react';
import {APIAction} from '../../store/api-acitons';
import Contacts from '../Contacts/Contacts';

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
      <main className="contact-book container">
        <Contacts contacts={contactsData.data}/>
      </main>
    </div>
  );
}
