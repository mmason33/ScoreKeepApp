import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
  renderPlayers () {
    if (this.props.players.length === 0){
      return (
        <div className="item">
          <p className="item__message item__message--empty">Add your first player to get started!</p>
        </div>
    );
    } else{
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>
      });
    }
  }
  render() {
    return (
      <FlipMove maintainContainerHeight={true}>
        {this.renderPlayers()}
      </FlipMove>
    );
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
};
