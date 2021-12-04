import './CardHeading.css'
import ControlPane from '../ControlPane/ControlPane';
import {Dispatch, SetStateAction} from 'react';

type Props = {
  id: number,
  username: string,
  name: string,
  avatar: string,
  isEditingMode: boolean,
  setIsEditingMode: Dispatch<SetStateAction<boolean>>,
  layoutClassName?: string,
}

export default function CardHeading(props: Props): JSX.Element {
  const {id, isEditingMode, setIsEditingMode, name, username, avatar, layoutClassName} = props;

  return (
    <header className={`${layoutClassName ? layoutClassName : ''} card-heading`}>
      <ControlPane
        layoutClassName={'card-heading__control-pane'}
        id={id}
        isEditingMode={isEditingMode}
        setIsEditingMode={setIsEditingMode}
      />
      <div className="card-heading__image">
        {avatar ? <img className="avatar" src={avatar} alt="avatar"/> : null}
      </div>
      <div className="card-heading__name-info">
        <input
          className={`card-heading__input card-heading__name ${isEditingMode ? 'card-heading__input--editable' : ''}`}
          type="text"
          name="name"
          value={name}
          readOnly={!isEditingMode}
          required
        />
        {username &&
          <input
            className={`card-heading__input card-heading__username ${isEditingMode ? 'card-heading__input--editable' : ''}`}
            type="text"
            name="username"
            value={username}
            readOnly={!isEditingMode}
          />}
      </div>
    </header>
  );
}
