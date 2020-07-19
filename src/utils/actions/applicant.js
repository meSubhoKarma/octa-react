import uuid from "uuid"
import { setAlert } from "./alert"
import {
  CREATE_APPLICANT_SUCCESS,
  APPLICANT_ERROR,
  GET_APPLICANTS,
} from "./types"

export const createApplicant = (formData, history, edit = false) => async (
  dispatch
) => {
  const id = uuid()
  const data = { ...formData, id }
  //console.log(data)

  let get = JSON.parse(localStorage.getItem("applicants"))
  //console.log(get)

  if (get === null) {
    let applicants = []
    localStorage.setItem("applicants", JSON.stringify(applicants.concat(data)))
  } else {
    if (get.length !== 0) {
      localStorage.setItem("applicants", JSON.stringify(get.concat(data)))
    }
  }

  //console.log(JSON.parse(localStorage.getItem("applicants")))

  try {
    dispatch({
      type: CREATE_APPLICANT_SUCCESS,
      payload: data,
    })

    dispatch(setAlert("Applicant created successfully"))

    if (!edit) {
      history.push("/fill-applicant")
    }
  } catch (err) {
    dispatch({
      type: APPLICANT_ERROR,
      payload: { msg: err.message, status: err.message },
    })

    dispatch(setAlert("Error"))
  }
}

export const getApplicants = () => async (dispatch) => {
  try {
    const data = JSON.parse(localStorage.getItem("applicants"))
    //console.log(data)

    dispatch({
      type: GET_APPLICANTS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: APPLICANT_ERROR,
      payload: { msg: err.message, status: err.message },
    })
  }
}
