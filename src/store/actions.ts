import {createAction} from '@reduxjs/toolkit';
import {Action} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ThunkAction} from '@reduxjs/toolkit';
import {Contact, State, User} from './reducer';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export enum ActionType {
  Login = 'Login',
  StartLoadingContacts = 'StartLoadingContacts',
  SaveContactList = 'SaveContactList',
  SetLoadingContactsError = 'SetLoadingContactsError',
  UpdateSelectedContact = 'UpdateSelectedContact',
  Search = 'Search',
}

export const ActionCreator = {
  loginUser: createAction(
    ActionType.Login,
    (user: User) => ({payload: user}),
  ),

  startLoadingContacts: createAction(ActionType.StartLoadingContacts),

  setLoadingContactsError: createAction(ActionType.SetLoadingContactsError),

  saveContactList: createAction(
    ActionType.SaveContactList,
    (contacts: Contact[]) => ({payload: contacts}),
  ),

  updateSelectedContact: createAction(
    ActionType.UpdateSelectedContact,
    (contact: Contact | null) => ({payload: contact}),
  ),

  search: createAction(
    ActionType.Search,
    (search: string) => ({payload: search}),
  ),
};
