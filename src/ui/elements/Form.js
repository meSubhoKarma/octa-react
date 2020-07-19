import styled from "styled-components"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0rem;
`

export const StyledInput = styled.input`
  width: 48rem;
  height: 5rem;
  background-color: var(--color-subGrey);
  color: var(--color-text);
  font-size: 1.8rem;
  font-weight: 400;
  border-radius: 0.5rem;
  text-align: start;
  padding: 0rem 1.8rem;
  margin: 0rem 0rem;
  border: none;
  border-top: 1px solid var(--color-grey);
  border-bottom: 1px solid var(--color-white);

  transition: all var(--speed);

  ::placeholder {
    color: var(--color-subText);
    opacity: 1;
  }

  &:hover {
    background-color: var(--color-offWhite);
  }
`

export const Label = styled.label`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--color-subText);
  margin-top: 2rem;
  margin-bottom: 0.4rem;
`

export const Select = styled.select`
  width: 48rem;
  height: 5rem;
  background-color: var(--color-subGrey);
  color: var(--color-text);
  font-size: 1.8rem;
  font-weight: 400;
  border: none;
  padding: 0rem 1.8rem;
  margin: 0rem 0rem;
  border-top: 1px solid var(--color-grey);
  border-bottom: 1px solid var(--color-white);
  cursor: pointer;
  border-radius: 0.5rem;

  option {
    color: var(--color-text);
    background-color: white;
    cursor: pointer;
    height: auto;
    font-size: 2.2rem;
    border: none;
  }
`
