import React from 'react'
import MsBtn from './ms.svg'

function Login() {
  return (
  <div className="jumbotron jumbotron-fluid">
    <div className="container px-0">
      <h1 className="font-weight-normal">Login Route</h1>
      <p className="lead mt-4">Welcome to MS Auth React Redux Firebase App. Now logging into application is now just one-click away.</p>
      <button className="btn btn-dark p-0 mt-5">
        <img className="rounded" src={MsBtn} alt="Ms Auth Btn"/>
      </button>
    </div>
  </div>
  )
}

export default Login