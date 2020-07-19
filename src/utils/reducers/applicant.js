import {
  CREATE_APPLICANT_SUCCESS,
  APPLICANT_ERROR,
  GET_APPLICANTS,
} from "../actions/types"

const INITIAL_STATE = {
  applicant: null,
  applicants: [],
  loading: true,
}

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action

  switch (type) {
    case GET_APPLICANTS:
      return {
        ...state,
        loading: false,
        applicants: payload,
      }

    case CREATE_APPLICANT_SUCCESS:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
