import {Contact, ContactsData, State, User} from './reducer';

export const getUser = (state: State): User | null => state.user;
export const getContacts = (state: State): ContactsData => state.contacts;
export const getSelectedContact = (state: State): Contact | null => state.selectedContact;
export const getIsLoadingFinished = (state: State): boolean => state.isLoadingFinished;
