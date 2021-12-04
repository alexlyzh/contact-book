import Footer from '../Footer/Footer';

export default function ContactCardEmpty(): JSX.Element {
  return (
    <div className="contact-card">
      <p className="contact-card__not-selected">
        Select a&nbsp;contact from the&nbsp;menu
      </p>
      <Footer className="contact-card__footer"/>
    </div>
  );
}
