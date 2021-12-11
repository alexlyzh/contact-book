import './ContactGroup.css'
import {Contact} from '../../store/reducer';
import {sortContacts} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getSelectedContact} from '../../store/selectors';
import {APIAction} from '../../store/api-acitons';

type Props = {
  group: string,
  contacts: Contact[],
}

export default function ContactGroup({group, contacts,}: Props): JSX.Element {
  const dispatch = useDispatch();
  const selectedContact = useSelector(getSelectedContact);
  let selectedID = selectedContact ? selectedContact.id : null;

  const sortedContacts = sortContacts(contacts);

  return(
    <li>
      <div className="group">
        <p className="group-name">{group}</p>
      </div>
      <ul>
        {sortedContacts.map((contact) => {
          const isSelected = contact.id === selectedID;
          return(
            <li className="contact-name" key={contact.id}>
              <button
                className={`contact-name__button ${isSelected ? 'contact-name__button--active' : ''}`}
                type="button"
                onClick={() => dispatch(APIAction.postSelectedContact(contact))}
                tabIndex={1}
              >
                {contact.name}
              </button>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
