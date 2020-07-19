import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { createJob } from "../utils/actions/job"
import { Title } from "../ui/elements/Typography"
import { PageWrapper, FormWrapper, ButtonWrapper } from "../ui/elements/Wrapper"
import { StyledForm, Label, StyledInput } from "../ui/elements/Form"
import { PrimaryButton } from "../ui/elements/Button"

const CreateJob = ({ createJob }) => {
  const [formData, setFormData] = useState({
    jobName: "",
    jobDesc: "",
    reqTech: "",
  })

  const { jobName, jobDesc, reqTech } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    createJob(formData, true)
  }

  return (
    <PageWrapper>
      <Title>Create a job</Title>
      <FormWrapper>
        <StyledForm>
          <Label>Name</Label>
          <StyledInput
            type="text"
            placeholder="Please enter a name"
            name="jobName"
            value={jobName}
            onChange={(e) => onChange(e)}
          />
          <Label>Description</Label>
          <StyledInput
            type="text"
            placeholder="Please enter a suitable description"
            name="jobDesc"
            value={jobDesc}
            onChange={(e) => onChange(e)}
          />
          <Label>Technologies</Label>
          <StyledInput
            type="text"
            placeholder="Please enter the technological stack"
            name="reqTech"
            value={reqTech}
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

CreateJob.propTypes = {
  createJob: PropTypes.func.isRequired,
}

export default connect(null, { createJob })(CreateJob)
