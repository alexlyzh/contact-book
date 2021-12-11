import Footer from '../Footer/Footer';
import {useSelector} from 'react-redux';
import {getIsLoadingFinished} from '../../store/selectors';

export default function ContactCardEmpty(): JSX.Element {
  const isLoadingFinished = useSelector(getIsLoadingFinished);

  return (
    <div className="contact-card">
      <p className="contact-card__not-selected">
        {isLoadingFinished ? 'Select a&nbsp;contact from the&nbsp;menu' : 'Loading'}
      </p>
      <Footer className="contact-card__footer"/>
    </div>
  );
}
