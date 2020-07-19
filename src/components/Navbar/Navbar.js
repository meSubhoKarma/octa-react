import React from "react"
import styled from "styled-components"
import { PrimaryLink } from "../../ui/elements/Links"

const Nav = styled.div`
  display: flex;
  width: 90%;
  height: 88vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid var(--shadow-color-light);
  box-shadow: -0.2rem -0.8rem 1rem var(--shadow-color-light);
`

const LINK = [
  {
    id: 1,
    link: "create-job",
    name: "create job",
  },
  {
    id: 2,
    link: "fill-applicant",
    name: "fill applicant",
  },
  {
    id: 3,
    link: "list-applicants",
    name: "list applicants",
  },
  {
    id: 4,
    link: "search",
    name: "search",
  },
]

function Navbar() {
  return (
    <Nav>
      {LINK.map((i) => (
        <PrimaryLink key={i.id} style={{ margin: "2rem" }} to={`${i.link}`}>
          {i.name}
        </PrimaryLink>
      ))}
    </Nav>
  )
}

export default Navbar
