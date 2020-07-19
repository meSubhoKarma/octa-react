import uuid from "uuid"
import { setAlert } from "./alert"
import { CREATE_JOB_SUCCESS, JOB_ERROR, GET_JOBS } from "./types"

export const createJob = (formData, history, edit = false) => async (
  dispatch
) => {
  const id = uuid()
  const data = { ...formData, id }
  //console.log(data)

  let get = JSON.parse(localStorage.getItem("jobs"))
  //console.log(get)

  if (get === null) {
    let jobs = []
    localStorage.setItem("jobs", JSON.stringify(jobs.concat(data)))
  } else {
    if (get.length !== 0) {
      localStorage.setItem("jobs", JSON.stringify(get.concat(data)))
    }
  }

  //console.log(JSON.parse(localStorage.getItem("jobs")))

  try {
    dispatch({
      type: CREATE_JOB_SUCCESS,
      payload: data,
    })

    dispatch(setAlert("Job created successfully"))

    if (!edit) {
      history.push("/create-job")
    }
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: err.message, status: err.message },
    })

    dispatch(setAlert("Error"))
  }
}

export const getJobs = () => async (dispatch) => {
  try {
    const data = JSON.parse(localStorage.getItem("jobs"))
    //console.log(data)

    dispatch({
      type: GET_JOBS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: err.message, status: err.message },
    })
  }
}
