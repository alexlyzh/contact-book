import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {getIsLoadingFinished} from '../../store/selectors';

const NoContactsStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NoContacts = (): JSX.Element => {
  const isLoadingFinished = useSelector(getIsLoadingFinished);
  return (
    <NoContactsStyled>
      {isLoadingFinished ? 'No contacts found' : 'Loading contacts...'}
    </NoContactsStyled>
  );
};

export default NoContacts;
