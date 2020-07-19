import { combineReducers } from "redux"
import alert from "./alert"
import job from "./job"
import applicant from "./applicant"

export default combineReducers({ alert, job, applicant })
