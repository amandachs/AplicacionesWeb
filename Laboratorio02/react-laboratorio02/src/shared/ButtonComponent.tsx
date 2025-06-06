import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 17px;
  padding: 10px 25px;
  border-radius: 0.7rem;
  background-image: linear-gradient(rgb(214, 202, 254), rgb(158, 129, 254));
  border: 2px solid rgb(50, 50, 50);
  border-bottom: 5px solid rgb(50, 50, 50);
  box-shadow: 0px 1px 6px 0px rgb(158, 129, 254);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translate(0, 0);
    border-bottom: 2px solid rgb(50, 50, 50);
  }
`;

export default function ButtonComponent() {
  return <StyledButton>Click Me</StyledButton>;
}
