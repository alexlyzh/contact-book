import {ContactsData, State, User} from './reducer';

export const getUser = (state: State): User | null => state.user;

export const getContacts = (state: State): ContactsData => state.contacts;
