import LoginScreen from './LoginScreen';
import {render, screen} from '@testing-library/react';

describe('Component: LoginScreen', () => {
    it('should render correctly', () => {
        render(<LoginScreen/>);

        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
