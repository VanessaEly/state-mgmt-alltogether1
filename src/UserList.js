import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {
  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayedPanel = () => {
    this.setState(oldState => ({
      showGamesPlayed: !oldState.showGamesPlayed,
    }));
  };

  render() {
    const { showGamesPlayed } = this.state;
    const { users } = this.props;

    //JSX for the button that toggles showing and hiding the players' score.
    const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? 'Hide ' : 'Show '}
          the Number of Games Played
        </button>
      </div>
    );

    return (
      <div>
        <h1>Users</h1>
        {users && users.length > 0 ? gamesPlayedButton : ''}
        <ol>
          {users.map(user => (
            <li className="user">
              <p>Username: {user.userName}</p>
			 {showGamesPlayed ? (<p>Number of Games Played: {user.numberOfGames}</p>) : ('')}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
