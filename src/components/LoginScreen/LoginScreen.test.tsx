import LoginScreen from './LoginScreen';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('Component: LoginScreen', () => {
    it('should render correctly', () => {
        render(
          <Provider store={store}>
            <LoginScreen/>
          </Provider>
        );

        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
