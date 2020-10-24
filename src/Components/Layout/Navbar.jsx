import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogout } from '../../Actions/auth';

class Navbar extends React.Component{

  handleLogoutBtn = (e) => this.props.dispatch(handleLogout());

  render() {
    const {auth} = this.props;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <p className="navbar-brand my-0">MS Auth</p>
          <div className="navbar-nav">
            {auth.isLoaded !== undefined
            ? <Fragment>
                {!auth.uid && <NavLink className="nav-link mx-3" to="/login">Login</NavLink>}
                {auth.uid && 
                <Fragment>
                  <NavLink className="nav-link mx-3" exact to="/">Dashboard</NavLink>
                  <button className="nav-link mx-3 btn btn-link py-0" onClick={this.handleLogoutBtn}>Logout</button>
                </Fragment>
                }
              </Fragment>
            : <span>Loading...</span>}
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({auth, firebase}) => {
  return {
    auth: firebase.auth,
    authError: auth.authError
  }
}

export default connect(mapStateToProps)(Navbar)