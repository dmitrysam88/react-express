import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionUsers from '../store/actions/users';

class App extends Component {

  addUser(){
    this.props.onAddUser({ id: this.props.users.length + 1, name: this.refs.name.value, email: this.refs.email.value });
  }

  render(){
    return (
      <div>
        <h1>My React App!</h1>
        <ul>
          {this.props.users.map((users, index)=>
            <li key={index}>
              <span>{users.id} </span>
              <span>{users.name} </span>
              <span>{users.email} </span>
            </li>
          )}
        </ul>
        <div>
          <label>Name</label>
          <input ref='name' type="text"/>
          <br/>
          <label>Email</label>
          <input ref='email' type="email"/>
          <br/>
          <button onClick={this.addUser.bind(this)}>Add user</button>
          <br/>
          <button onClick={this.props.onGetUsers}>Get users</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    users: state.users.users
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAddUser: actionUsers.onAddUser(dispatch),
    onGetUsers: actionUsers.onGetUsers(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);