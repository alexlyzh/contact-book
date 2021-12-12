import './LoginScreen.css';
import {useRef, FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {APIAction} from '../../store/api-acitons';
import Footer from '../Footer/Footer';

const LoginScreen = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current && passwordRef.current) {
      dispatch(APIAction.login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <div className="page">
      <main className="login-screen">
          <div className="login-heading">
              <svg width="40px" height="40px" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </svg>
              <h1 style={{margin: 0}}>Sign in</h1>
          </div>

          <form className="login-form" onSubmit={onFormSubmit}>
              <input
                  className="login-form__input"
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
              />
              <input
                  className="login-form__input"
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Password *"
                  required
              />
              <button className="submit-button" type="submit">Submit</button>
          </form>
      </main>
      <Footer/>
    </div>
  );
}

export default LoginScreen;
