import * as S from './Search.styled';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/actions';
import {ChangeEvent} from 'react';

const Search = (): JSX.Element => {
  const dispatch = useDispatch();

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(ActionCreator.search(evt.target.value));
  }

  return (
    <S.Search
      type="search"
      placeholder="Search"
      onChange={onInputChange}
    />
  );
};

export default Search;
