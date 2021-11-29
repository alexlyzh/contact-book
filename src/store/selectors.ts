import {State, User} from './reducer';

export const getUser = (state: State): User | null => state.user;
