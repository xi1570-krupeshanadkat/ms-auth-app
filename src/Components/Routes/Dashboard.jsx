import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

function Dashboard(props) {
  const {auth} = props;
  if(!auth.uid && auth.isLoaded){
    return <Redirect to="/login" />
  }
  return (
  <div className="jumbotron jumbotron-fluid">
    <div className="container px-0">
      <h1 className="font-weight-normal">Dashboard Route</h1>
      <p className="lead mt-4 mb-2">Hi <span className="text-primary">{auth.displayName}</span>!</p>
      <p className="lead">You have successfully logged in using Microsoft & Firebase Authentication services!</p>
    </div>
  </div>
  )
}

const mapStateToProps = ({auth, firebase}) => {
  return {
    auth: firebase.auth,
    authError: auth.authError
  }
}

export default connect(mapStateToProps)(Dashboard)