import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getApplicants } from "../utils/actions/applicant"
import { Title } from "../ui/elements/Typography"
import {
  PageWrapper,
  CardsWrapper,
  ListWrapper,
  JobWrapper,
  DescWrapper,
  Card,
} from "../ui/elements/Wrapper"
import { Heading, Text, DescText } from "../ui/elements/Typography"

function ListApplicants({ getApplicants, applicant: { applicants, loading } }) {
  useEffect(() => {
    getApplicants()
  }, [getApplicants])

  return (
    <PageWrapper>
      <Title>List all applicants</Title>
      <CardsWrapper>
        <ListWrapper>
          {!applicants
            ? null
            : applicants.map((i) => (
                <Card key={i.id}>
                  <DescWrapper>
                    <Heading>{i.name}</Heading>
                    <DescText>Tech stack: {i.tech}</DescText>
                    <DescText>Notice period: {i.notice}</DescText>
                    <DescText>Salary Expectation: {i.salary}</DescText>
                    <DescText>Note: {i.note}</DescText>
                  </DescWrapper>
                  <JobWrapper>
                    <Text>Job Id: {i.jobId}</Text>
                    {/* <Text>{i.job}</Text>
                    <Text>Job Desc: {i.jobDesc}</Text>
                    <Text>Tech stack: {i.reqTech}</Text> */}
                  </JobWrapper>
                </Card>
              ))}
        </ListWrapper>
      </CardsWrapper>
    </PageWrapper>
  )
}

ListApplicants.propTypes = {
  getApplicants: PropTypes.func.isRequired,
  applicant: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  applicant: state.applicant,
})

export default connect(mapStateToProps, { getApplicants })(ListApplicants)
