import LoginScreen from '../LoginScreen/LoginScreen';
import ContactsScreen from '../ContactsScreen/ContactsScreen';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/selectors';
import {Routes, Route, Navigate} from 'react-router-dom';
import {AppRoute} from '../../constants';
import NotFoundScreen from '../NotFoundScreen/NotFoundScreen';

const App = (): JSX.Element => {
  const user = useSelector(getUser);

  return (
    <Routes>
      <Route path={AppRoute.Root} element={
        !user ? <Navigate to={AppRoute.Login} replace/> : <Navigate to={AppRoute.Contacts} replace/>
      }/>
      <Route path={AppRoute.Login} element={
        !user ? <LoginScreen/> : <Navigate to={AppRoute.Contacts} replace/>
      }/>
      <Route path={AppRoute.Contacts} element={
        user ? <ContactsScreen/> : <Navigate to={AppRoute.Login} replace/>
      }/>
      <Route path="*" element={<NotFoundScreen />}/>
    </Routes>
  );
}

export default App;
