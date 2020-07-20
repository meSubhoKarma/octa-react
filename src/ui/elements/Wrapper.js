import styled from "styled-components"

export const Contained = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const Wrapper = styled.div`
  z-index: 2;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const ViewWrapper = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 8rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export const NavWrapper = styled.div`
  display: flex;
  width: 25%;
  padding-left: 8rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PageWrapper = styled.div`
  display: flex;
  width: 88%;
  height: 88vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  width: 100%;
  height: 88%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: transparent;
  border-top: 1px solid var(--color-grey);
  border-bottom: 1px solid var(--color-white);
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
`

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(20rem,46rem));
  justify-content: space-around;
  align-content: center;
  align-items: center;
  width: 100%;
  padding: 4rem 2rem;
  grid-gap: 4rem 4rem;
`

export const DescWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
`

export const JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 4rem;
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-main);
  border-radius: 1rem;
  border: 1px solid var(--color-main);
  border-top: 2px solid var(--color-white);
  border-bottom: 2px solid var(--color-grey);
  width: 100%;
`
