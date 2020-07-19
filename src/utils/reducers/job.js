import { CREATE_JOB_SUCCESS, GET_JOBS } from "../actions/types"

const INITIAL_STATE = {
  job: null,
  jobs: [],
  loading: true,
}

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action

  switch (type) {
    case GET_JOBS:
      return {
        ...state,
        loading: false,
        jobs: payload,
      }

    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
