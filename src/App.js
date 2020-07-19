import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"
import history from "./utils/history"
import Layout from "./ui/layouts/Layout"
import CreateJob from "./pages/CreateJob"
import FillApplicant from "./pages/FillApplicant"
import ListApplicants from "./pages/ListApplicants"
import Search from "./pages/Search"

const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/create-job" />
          </Route>
          <Route exact path="/create-job" component={CreateJob} />
          <Route exact path="/fill-applicant" component={FillApplicant} />
          <Route exact path="/list-applicants" component={ListApplicants} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
