import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;  
  margin: 0 auto;
  border: 0.05rem solid var(--darkRed);
  border-color: ${props => (props.cart ? "var(--darkRed)" : "var(--darkRed)")};
  color: ${prop => (prop.cart ? "var(--darkRed)" : "var(--darkRed)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop => (prop.cart ? "var(--darkRed)" : "var(--darkRed)")};
    color: var(--darkGray);
  }
  &:focus {
    outline: none;
  }
`;
