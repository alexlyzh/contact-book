import {createAction} from '@reduxjs/toolkit';
import {Action} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ThunkAction} from '@reduxjs/toolkit';
import {State, User} from './reducer';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export enum ActionType {
  Login = 'Login',
  Logout = 'Logout',
  StartLoadingContacts = 'StartLoadingContacts',
  SaveContacts = 'SaveContacts',
  SetLoadingContactsError = 'SetLoadingContactsError',
  SelectContact = 'SelectContact',
}

export const ActionCreator = {
  loginUser: createAction(
    ActionType.Login,
    (user: User) => ({payload: user})
  ),

  startLoadingContacts: createAction(ActionType.StartLoadingContacts),

  setLoadingContactsError: createAction(ActionType.SetLoadingContactsError),

  saveContacts: createAction(
    ActionType.SaveContacts,
    (contacts) => ({payload: contacts})
  ),

  logoutUser: createAction(ActionType.Logout),

  selectContact: createAction(
    ActionType.SelectContact,
    (contact) => ({payload: contact}),
  )
};
