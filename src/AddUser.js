import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
    },
    alreadyAdded: false,
  };
  
  handleInput = event => {
    const { name, value } = event.target;
    
    this.setState(currState => ({
      ...currState, user: { // merges current state with new user object
        ...currState.user, [name]: value, // merges current state user object with the changed property
      },
    }));
  };
  userExists = () => {
    console.log('rntro', this.props.users);
    for (const user in this.props.users) {
      if (this.props.users[user].userName === this.state.user.userName) 
      {
        console.log('true'); 
        return true;
      }
    }
    console.log('false'); 
    return false;
  }
  handleSubmit = event => {
    console.log('submit');
    event.preventDefault();
    const alreadyAdded = this.userExists();
    if (!alreadyAdded) this.props.onAddUser(this.state.user);
    this.setState(() => ({ alreadyAdded }));
    console.log('this.state.alreadyAdded', this.state.alreadyAdded);
    
  };
  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === '' || lastName === '' || username === '';
  };
  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="First Name" name="firstName"
              value={this.state.user.firstName} onChange={this.handleInput} />
          <input type="text" placeholder="Last Name" name="lastName"
              value={this.state.user.lastName} onChange={this.handleInput} />
          <input type="text" placeholder="Username" name="userName"
              value={this.state.user.userName} onChange={this.handleInput} />
		  <button disabled={this.isDisabled()}>Add</button>
		</form>
		{this.state.alreadyAdded? (<p className="error">You cannot add an user that already exists.</p>) : ('')}
      </div>
    );
  }
};

export default AddUser;