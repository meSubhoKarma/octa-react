import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "./alert.css"

function Alert({ alerts }) {
  const notify = () =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => {
      toast(`${alert.msg}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    })

  return (
    <>
      {notify()}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover={false}
      />
    </>
  )
}

Alert.protoTypes = {
  alerts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  alerts: state.alert,
})

export default connect(mapStateToProps)(Alert)
