import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getJobs } from "../utils/actions/job"
import { createApplicant } from "../utils/actions/applicant"
import { Title } from "../ui/elements/Typography"
import { PageWrapper, FormWrapper, ButtonWrapper } from "../ui/elements/Wrapper"
import { StyledForm, Label, StyledInput, Select } from "../ui/elements/Form"
import { PrimaryButton } from "../ui/elements/Button"

function FillApplicant({ getJobs, job: { jobs, loading }, createApplicant }) {
  useEffect(() => {
    getJobs()
  }, [getJobs])

  const [formData, setFormData] = useState({
    name: "",
    note: "",
    tech: "",
    notice: "",
    salary: "",
    jobId: "",
  })

  const { name, note, tech, notice, salary, jobId } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    createApplicant(formData, true)
  }

  return (
    <PageWrapper>
      <Title>Fill an applicant</Title>
      <FormWrapper>
        <StyledForm>
          <Label>Select Job</Label>
          <Select name="jobId" onChange={(e) => onChange(e)}>
            <option>Select job</option>
            {!jobs
              ? null
              : jobs.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.jobName} - {i.jobDesc}
                  </option>
                ))}
          </Select>
          <Label>Name</Label>
          <StyledInput
            type="text"
            placeholder="Please enter a name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <Label>Technologies</Label>
          <StyledInput
            type="text"
            placeholder="Please enter the technological stacks"
            name="tech"
            value={tech}
            onChange={(e) => onChange(e)}
          />
          <Label>Notice Period</Label>
          <StyledInput
            type="text"
            placeholder="Please enter notice period"
            name="notice"
            value={notice}
            onChange={(e) => onChange(e)}
          />
          <Label>Salary Asked</Label>
          <StyledInput
            type="text"
            placeholder="Please enter the asked salary"
            name="salary"
            value={salary}
            onChange={(e) => onChange(e)}
          />
          <Label>Notes</Label>
          <StyledInput
            type="text"
            placeholder="Please enter a note"
            name="note"
            value={note}
            onChange={(e) => onChange(e)}
          />
        </StyledForm>
      </FormWrapper>
      <ButtonWrapper>
        <PrimaryButton type="submit" onClick={(e) => onSubmit(e)}>
          Submit
        </PrimaryButton>
      </ButtonWrapper>
    </PageWrapper>
  )
}

FillApplicant.propTypes = {
  getJobs: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
  createApplicant: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  job: state.job,
})

export default connect(mapStateToProps, { getJobs, createApplicant })(
  FillApplicant
)
