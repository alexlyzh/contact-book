import styled from 'styled-components';

const Search = styled.input`
  grid-column: 1 / 3;

  border-radius: 15px;
  padding: 10px 10px 10px 45px;
  margin-left: -18px;

  font-size: 16px;
  line-height: 1.2;
  color: #383838;
  border: 1px solid #e9e9e9;

  background-color: #fff;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3Csvg fill='none' width='24' height='24' viewBox='0 0 24 24' stroke='%23818181' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10.5' cy='10.5' r='7.5'/%3E%3Cline x1='21' x2='15.8' y1='21' y2='15.8'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 15px 50%;

  &::placeholder {
    font-size: 16px;
    line-height: 1.1875;
    color: #818181;
  }
`;

export {Search};
