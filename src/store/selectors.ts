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
    const {requestStatus, data} = contactsData;
    return {
      requestStatus,
      data: data.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase())),
    };
});

export const getMaxContactId = createSelector(getContacts, (contacts) => {
  let maxId = 0;
  contacts.data.forEach((contact) => maxId = Math.max(maxId, contact.id));
  return maxId;
});
