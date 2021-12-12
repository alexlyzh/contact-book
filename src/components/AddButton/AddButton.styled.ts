import styled, {css} from 'styled-components';

export const AddButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 24px;
  box-sizing: border-box;

  ${(props) => !props.disabled && css`
    &:hover {
      fill: #0b5dde;
    }
  `}
`;
