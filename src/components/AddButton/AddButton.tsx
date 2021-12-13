import * as S from './AddButton.styled';
import {useDispatch, useSelector} from 'react-redux';
import {Contact} from '../../store/reducer';
import {getIsLoadingFinished, getMaxContactId} from '../../store/selectors';
import {ActionCreator} from '../../store/actions';
import {Dispatch, SetStateAction} from 'react';

type Props = {
  isEditingMode: boolean,
  setIsEditingMode: Dispatch<SetStateAction<boolean>>,
  contacts: Contact[],
}

const newContact = {
  avatar: '',
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  isNew: true,
};

const AddButton = ({isEditingMode, setIsEditingMode, contacts}: Props): JSX.Element => {
  const dispatch = useDispatch();
  const maxContactsId = useSelector(getMaxContactId);
  const isLoadingFinished = useSelector(getIsLoadingFinished);

  const id = maxContactsId +1;

  return (
    <S.AddButton
      type="button"
      disabled={!isLoadingFinished || isEditingMode}
      onClick={() => {
        setIsEditingMode(true);
        dispatch(ActionCreator.updateSelectedContact(Object.assign({id}, newContact)));
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485 485" xmlSpace="preserve">
        <polygon points="485,227.5 257.5,227.5 257.5,0 227.5,0 227.5,227.5 0,227.5 0,257.5 227.5,257.5 227.5,485 257.5,485 257.5,257.5 485,257.5 "/>
      </svg>
    </S.AddButton>
  );
};

export default AddButton;
