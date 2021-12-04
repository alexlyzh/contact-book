import './ContactCard.css'
import {Contact} from '../../store/reducer';
import Footer from '../Footer/Footer';
import ContactDetail from '../ContactDetail/ContactDetail';
import {InputType} from '../../constants';
import {useState} from 'react';
import CardHeading from '../CardHeading/CardHeading';

type Props = {
  contact?: Contact,
}

export default function ContactCard({contact}: Props): JSX.Element {
  const [isEditingMode, setIsEditingMode] = useState(false);

  if (!contact) {
    return (
      <div className="contact-card">
        <p className="contact-card__not-selected">
          Select a&nbsp;contact from the&nbsp;menu
        </p>
        <Footer className="contact-card__footer"/>
      </div>
    );
  }

  const {id, avatar, name, username, phone, website, email} = contact;

  return (
    <div className="contact-card">
      <CardHeading
        layoutClassName="contact-card__container"
        username={username}
        name={name}
        avatar={avatar}
        isEditingMode={isEditingMode}
        setIsEditingMode={setIsEditingMode}
      />
      {id}
      <div className="contact-card__container contact-card__detailed-info">
        <ContactDetail value={email} inputType={InputType.Email} isEditingMode={isEditingMode}/>
        <ContactDetail value={phone} inputType={InputType.Phone} isEditingMode={isEditingMode}/>
        <ContactDetail value={website} inputType={InputType.Website} isEditingMode={isEditingMode}/>
      </div>
      <Footer className="contact-card__footer"/>
    </div>
  );
}
