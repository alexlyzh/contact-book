import * as S from './Search.styled';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/actions';
import {ChangeEvent} from 'react';
import {debounce} from '../../utils';

const Search = (): JSX.Element => {
  const dispatch = useDispatch();

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(ActionCreator.search(evt.target.value));
  }

  return (
    <S.Search
      type="search"
      placeholder="Search"
      onChange={debounce(onInputChange, 500)}
    />
  );
};

export default Search;
