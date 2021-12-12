import './ContactCard.css'
import Footer from '../Footer/Footer';
import ContactDetail from '../ContactDetail/ContactDetail';
import {InputType} from '../../constants';
import {ChangeEvent, Dispatch, SetStateAction} from 'react';
import CardHeading from '../CardHeading/CardHeading';
import {useDispatch, useSelector} from 'react-redux';
import {getSelectedContact} from '../../store/selectors';
import ContactCardEmpty from '../ContactCardEmpty/ContactCardEmpty';
import {ActionCreator} from '../../store/actions';

type Props = {
  isEditingMode: boolean,
  setIsEditingMode: Dispatch<SetStateAction<boolean>>,
}

export default function ContactCard({isEditingMode, setIsEditingMode}: Props): JSX.Element {
  const dispatch = useDispatch();
  const contact = useSelector(getSelectedContact);

  if (contact === null) {
    return <ContactCardEmpty />;
  }

  const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const update = {
      ...contact,
      [target.name]: target.value,
    };
    dispatch(ActionCreator.updateSelectedContact(update));
  };

  const {id, avatar, name, username, phone, website, email} = contact;
  return (
    <div className="contact-card">
      <CardHeading
        layoutClassName="contact-card__container"
        id={id}
        username={username}
        name={name}
        avatar={avatar}
        isEditingMode={isEditingMode}
        setIsEditingMode={setIsEditingMode}
        onInputChange={onInputChange}
      />
      {id}
      <div className="contact-card__container contact-card__detailed-info">
        <ContactDetail value={email} inputType={InputType.Email} isEditingMode={isEditingMode} onInputChange={onInputChange}/>
        <ContactDetail value={phone} inputType={InputType.Phone} isEditingMode={isEditingMode} onInputChange={onInputChange}/>
        <ContactDetail value={website} inputType={InputType.Website} isEditingMode={isEditingMode} onInputChange={onInputChange}/>
      </div>
      <Footer className="contact-card__footer"/>
    </div>
  );
}
