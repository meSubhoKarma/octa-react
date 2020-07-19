import styled from "styled-components"
import { Link } from "react-router-dom"

export const PrimaryLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  width: 70%;
  text-align: center;
  font-size: 1.8rem;
  padding: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--color-subText);
  background: transparent;
  border: 1px solid var(--shadow-color-light);
  border-radius: 0.5rem;
  transition: all var(--speed);

  &:hover {
    color: var(--color-text);
    background: var(--color-subGrey);
    border: 1px solid var(--color-subGrey);
    border-top: 1px solid var(--color-grey);
    border-bottom: 1px solid var(--color-white);
  }

  &:focus {
    color: var(--color-white);
    background: var(--color-main);
    border: 1px solid var(--color-main);
    border-top: 2px solid var(--color-white);
    border-bottom: 2px solid var(--color-grey);
  }
`
