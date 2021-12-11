import {ActionCreator, ThunkActionResult} from './actions';
import {Contact, User} from './reducer';
import {generatePath} from 'react-router-dom';
import {toast} from 'react-toastify';

type AuthData = {
  email: string,
  password: string,
};

enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Contacts = '/contacts',
  Contact = '/contacts/:id',
  SelectedContact = '/selected-contact',
}

export const APIAction = {
  login: ({email, password}: AuthData): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const {data} = await api.post<User>(APIRoute.Login, {email, password});
        dispatch(ActionCreator.loginUser(data));
      } catch (err) {
        throw err;
      }
    },

  logout: (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        await api.delete<User>(APIRoute.Logout);
        dispatch(ActionCreator.logoutUser());
      } catch (err) {
        throw err;
      }
    },

  getContacts: (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      dispatch(ActionCreator.startLoadingContacts());
      try {
        const {data} = await api.get<Contact[]>(APIRoute.Contacts);
        dispatch(ActionCreator.saveContactList(data));
      } catch (e) {
        dispatch(ActionCreator.setLoadingContactsError());
        throw e;
      }
    },

  getSelectedContact: (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const {data} = await api.get<Contact>(APIRoute.SelectedContact);
        const contact = Object.keys(data).length ? data : null;
        dispatch(ActionCreator.updateSelectedContact(contact));
      } catch (e) {
        throw e;
      }
    },

  postSelectedContact: (contact: Contact): ThunkActionResult =>
    async (dispatch, getState, api): Promise<void> => {
      try {
        const {data} = await api.post<Contact>(APIRoute.SelectedContact, contact);
        dispatch(ActionCreator.updateSelectedContact(data));
      } catch (e) {
        throw e;
      }
    },

  syncContact: (contact: Contact): ThunkActionResult =>
    async (dispatch, getState, api): Promise<void> => {
      try {
        const id = contact.id.toString();
        await api.post<Contact>(APIRoute.SelectedContact, contact);
        const {data} = await api.put<Contact>(generatePath(APIRoute.Contact, {id}), contact);

        const contacts = [...getState().contacts.data];
        const index = contacts.findIndex((item) => item.id === data.id);
        contacts.splice(index, 1, data);
        dispatch(ActionCreator.saveContactList(contacts));
      } catch (e) {
        throw e;
      }
    },

  deleteContact: (contact: Contact): ThunkActionResult =>
    async (dispatch, getState, api): Promise<void> => {
      try {
        const id = contact.id.toString();
        await api.delete(generatePath(APIRoute.Contact, {id}));
        await api.post(APIRoute.SelectedContact, {});

        const contacts = [...getState().contacts.data];
        const index = contacts.findIndex((item) => item.id === contact.id);
        contacts.splice(index, 1);
        dispatch(ActionCreator.saveContactList(contacts));
        dispatch(ActionCreator.updateSelectedContact(null));
        toast.info(`Contact ${contact.name} deleted`);
      } catch (e) {
        throw e;
      }
    },
};
