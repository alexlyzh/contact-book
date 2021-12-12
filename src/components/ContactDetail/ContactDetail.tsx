import './ContactDetail.css';
import {InputType} from '../../constants';
import {ChangeEvent} from 'react';

const InputLabel = {
 [InputType.Name]: 'name',
 [InputType.Username]: 'username',
 [InputType.Email]: 'email',
 [InputType.Phone]: 'phone',
 [InputType.Website]: 'website',
} as const;

type Props = {
  inputType: InputType,
  value: string,
  isEditingMode: boolean,
  onInputChange: (evt: ChangeEvent<HTMLInputElement>) => void,
}

const ContactDetail = (props: Props): JSX.Element  => {
  const {inputType, value, isEditingMode, onInputChange} = props;

  return (
    <div className="contact-detail">
      <label className="contact-detail__label" htmlFor={`contact-card__${inputType}`}>
        {InputLabel[inputType]}:
      </label>
      <input
        className={`contact-detail__input ${isEditingMode ? 'contact-detail__input--editable' : ''}`}
        id={`contact-card__${inputType}`}
        type={inputType}
        name={InputLabel[inputType]}
        value={value}
        readOnly={!isEditingMode}
        autoComplete="off"
        onChange={onInputChange}
      />
    </div>
  );
}

export default ContactDetail;
