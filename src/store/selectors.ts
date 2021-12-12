import {Contact, ContactsData, State, User} from './reducer';
import {createSelector} from '@reduxjs/toolkit';

export const getUser = (state: State): User | null => state.user;
export const getContacts = (state: State): ContactsData => state.contacts;
export const getSelectedContact = (state: State): Contact | null => state.selectedContact;
export const getIsLoadingFinished = (state: State): boolean => state.isLoadingFinished;
export const getSearch = (state: State): string => state.search;

export const selectSearchedContacts = createSelector(
  [getSearch, getContacts],
  (search, contactsData) => {
    const contacts = contactsData.data;
    const regexp = new RegExp(!search ? /.*/ : `${search.toLowerCase()}`, 'g');

    return {
      requestStatus: contactsData.requestStatus,
      data: contacts.filter((contact) => regexp.test(contact.name.toLowerCase())),
    };
});
