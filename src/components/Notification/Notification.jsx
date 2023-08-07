import React from "react";
import PropTypes from "prop-types";

const Notification  = ({ messege }) => {
  return <p>{messege}</p>
}

export default Notification;

Notification.propTypes = {
  messege: PropTypes.string.isRequired,
}