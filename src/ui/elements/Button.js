import styled from "styled-components"

export const PrimaryButton = styled.button`
  text-decoration: none;
  font-family: inherit;
  width: 30%;
  text-align: center;
  font-size: 1.8rem;
  padding: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--color-white);
  background: var(--color-main);
  border: 1px solid var(--color-main);
  border-top: 2px solid var(--color-white);
  border-bottom: 2px solid var(--color-grey);
  border-radius: 0.5rem;
  transition: all var(--speed);

  &:hover {
    color: var(--color-text);
    background: var(--color-offGrey);
    border: 1px solid var(--color-offGrey);
    border-top: 2px solid var(--color-white);
    border-bottom: 2px solid var(--color-grey);
  }

  &:focus {
    color: var(--color-white);
    background: var(--color-main);
    border: 1px solid var(--color-main);
    border-top: 2px solid var(--color-white);
    border-bottom: 2px solid var(--color-grey);
  }
`
