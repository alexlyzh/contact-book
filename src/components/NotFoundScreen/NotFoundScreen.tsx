import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Message = styled.p`
  font-size: 2rem;
`;

const RouterLink = styled(Link)`
  display: block;
  font-size: 1rem;
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;

  padding-bottom: 2px;
  border-bottom: 1px solid #0b5dde;

  color: #0b5dde;

  &:focus,
  &:hover {
    color: black;
    border-bottom: 1px solid black;
  }
`;

const NotFoundScreen = (): JSX.Element => {
  return (
    <Layer>
      <Message>
        404 - Page not found
      </Message>
      <RouterLink to={AppRoute.Root}>
        Back to main page
      </RouterLink>
    </Layer>
  );
};

export default NotFoundScreen;
