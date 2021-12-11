import {createReducer} from '@reduxjs/toolkit';
import {ActionCreator} from './actions';

export type User = {
  email: string,
  password: string,
}

export type Contact = {
  id: number,
  avatar: string,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
}

export enum RequestStatus {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type ContactsData = {
  requestStatus: RequestStatus,
  data: Contact[],
}

export type State = {
  user: User | null,
  contacts: ContactsData,
  selectedContact: Contact | null,
  isLoadingFinished: boolean,
}

const initialState: State = {
  user: null,
  contacts: {
    requestStatus: RequestStatus.IDLE,
    data: [],
  },
  selectedContact: null,
  isLoadingFinished: false,
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionCreator.loginUser, (state, action) => {
    state.user = action.payload;
  })
    .addCase(ActionCreator.logoutUser, (state) => {
      state.user = null;
      state.contacts = {
        requestStatus: RequestStatus.IDLE,
        data: [],
      };
      state.selectedContact = null;
    })
    .addCase(ActionCreator.saveContactList, (state, action) => {
      state.contacts = {
        requestStatus: RequestStatus.SUCCESS,
        data: action.payload,
      };
      state.isLoadingFinished = true;
    })
    .addCase(ActionCreator.startLoadingContacts, (state) => {
      state.contacts = {
        requestStatus: RequestStatus.PENDING,
        data: [],
      };
    })
    .addCase(ActionCreator.setLoadingContactsError, (state) => {
      state.contacts = {
        requestStatus: RequestStatus.ERROR,
        data: [],
      };
      state.isLoadingFinished = true;
    })
    .addCase(ActionCreator.updateSelectedContact, (state, action) => {
      state.selectedContact = action.payload;
    });
});
