import {ActionCreator, ThunkActionResult} from './actions';
import {Contact, User} from './reducer';

type AuthData = {
  email: string,
  password: string,
};

enum AppRoute {
  PostLogin = '/login',
  GetContacts = '/contacts',
}

export const APIAction = {
  login: ({email, password}: AuthData): ThunkActionResult =>
    async (dispatch, getState, api): Promise<void> => {
      try {
        const {data} = await api.post<User>(AppRoute.PostLogin, {email, password});
        dispatch(ActionCreator.loginUser(data));
      } catch (err) {
        throw err;
      }
    },

  getContacts: (): ThunkActionResult =>
    async (dispatch, getState, api): Promise<void> => {
      dispatch(ActionCreator.startLoadingContacts());
      try {
        const {data} = await api.get<Contact[]>(AppRoute.GetContacts);
        dispatch(ActionCreator.saveContacts(data));
      } catch (e) {
        dispatch(ActionCreator.setLoadingContactsError());
        throw e;
      }
    }
};
