import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';

export default function ContactsScreen(): JSX.Element {
  return (
    <>
      <h1>This is contacts screen.</h1>
      <Link to={AppRoute.Login}>To LoginScreen</Link>
    </>
  );
}
