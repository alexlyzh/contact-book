import './ContactDetail.css';
import {InputType} from '../../constants';

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
}

export default function ContactDetail(props: Props): JSX.Element {
  const {inputType, value, isEditingMode} = props;

  return (
    <div className="contact-detail">
      <label className="contact-detail__label" htmlFor={`contact-card__${inputType}`}>
        {InputLabel[inputType]}:
      </label>
      <input
        className={`contact-detail__input ${isEditingMode ? 'contact-detail__input--editable' : ''}`}
        id={`contact-card__${inputType}`}
        type={inputType}
        value={value}
        readOnly={!isEditingMode}
        autoComplete="off"
      />
    </div>
  );
}
