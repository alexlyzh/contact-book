import './ControlPane.css';
import {Dispatch, SetStateAction} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {APIAction} from '../../store/api-acitons';
import {getSelectedContact} from '../../store/selectors';

type Props = {
  id: number,
  isEditingMode: boolean,
  setIsEditingMode: Dispatch<SetStateAction<boolean>>;
  layoutClassName?: string,
}

const ControlPane = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const contact = useSelector(getSelectedContact);
  const {isEditingMode, setIsEditingMode, layoutClassName} = props;

  return (
    <div className={`${layoutClassName ? layoutClassName : ''} control-pane`}>
      <button
        className="control-pane__button control-pane__button-delete"
        type="button"
        onClick={() => contact && dispatch(APIAction.deleteContact(contact))}
      >
        Delete contact
      </button>
      <button
        className="control-pane__button control-pane__button-edit"
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          setIsEditingMode(!isEditingMode);

          if (isEditingMode && contact) {
            dispatch(APIAction.postSelectedContact(contact));
            if (contact.isNew) {
              dispatch(APIAction.createContact(contact));
              return;
            }
            dispatch(APIAction.updateContact(contact));
          }
        }}
      >
        {isEditingMode ? 'Save': 'Edit'}
      </button>
    </div>
  );
}

export default ControlPane;
