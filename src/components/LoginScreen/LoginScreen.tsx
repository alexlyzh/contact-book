import './LoginScreen.css';

export default function LoginScreen() {
    return (
        <div className="login-screen">
            <div className="login-heading">
                <svg width="40px" height="40px" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
                <h1 style={{margin: 0}}>Sign in</h1>
            </div>

            <form className="login-form">
                <input
                    className="login-form__input"
                    type="email"
                    name="email"
                    placeholder="Email *"
                />
                <input
                    className="login-form__input"
                    type="password"
                    name="password"
                    placeholder="Password *"
                />
                <button className="login-form__button" type="submit">Submit</button>
            </form>
        </div>
    );
}
