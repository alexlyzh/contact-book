import './Footer.css'

type Props = {
  className?: string,
}

export default function Footer({className}: Props): JSX.Element {
  return (
    <footer className={`footer ${className ? className : ''}`}>
      <a
        className="link"
        href="https://github.com/alexlyzh/contact-book"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
}
