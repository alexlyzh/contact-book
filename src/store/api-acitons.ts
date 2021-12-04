import {ActionCreator, ThunkActionResult} from './actions';
import {Contact, User} from './reducer';

type AuthData = {
  email: string,
  password: string,
};

enum AppRoute {
  Login = '/login',
  Logout = '/logout',
  Contacts = '/contacts',
  SelectedContact = '/selected-contact',
}

export const APIAction = {
  login: ({email, password}: AuthData): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const {data} = await api.post<User>(AppRoute.Login, {email, password});
        dispatch(ActionCreator.loginUser(data));
      } catch (err) {
        throw err;
      }
    },

  logout: (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        await api.delete<User>(AppRoute.Logout);
        dispatch(ActionCreator.logoutUser());
      } catch (err) {
        throw err;
      }
    },

  getContacts: (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      dispatch(ActionCreator.startLoadingContacts());
      try {
        const {data} = await api.get<Contact[]>(AppRoute.Contacts);
        dispatch(ActionCreator.saveContacts(data));
      } catch (e) {
        dispatch(ActionCreator.setLoadingContactsError());
        throw e;
      }
    },

  getSelectedContact: (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const {data} = await api.get<Contact>(AppRoute.SelectedContact);
        dispatch(ActionCreator.selectContact(data));
      } catch (e) {
        throw e;
      }
    },

  postSelectedContact: (contact: Contact): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const {data} = await api.post<Contact>(AppRoute.SelectedContact, contact);
        dispatch(ActionCreator.selectContact(data));
      } catch (e) {
        throw e;
      }
    },
};
