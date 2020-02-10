import React from 'react';
import {Link} from "react-router-dom"

const FoFError = (props) => {
  return (
    <div className="error-page">
      <h2> We're sorry, that doesn't appear to be a question! </h2>
      <p> Please go back to the home page and try again </p>
      <Link to="/"> Back to Home </Link>
    </div>
  )
}

export default FoFError;
