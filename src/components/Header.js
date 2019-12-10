import React, { Component } from 'react';
import { AppContext } from '../AppProvider';
import { GAME_TYPES } from '../common';

import './Header.css';

const GameType = (props) => {
    const { value, name } = props;

    return (
      <AppContext.Consumer>
        {context => (
          <li 
            onClick={() => context.changeType(value)} 
            className={value === context.gameType ? "active" : ""}> 
            {name} 
          </li>
        )}
      </AppContext.Consumer>
    )
  }

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Simple Tic Tac Toe</h1>
        <h3>Luezoid Technologies Private Limited (Task)</h3>
        <h4>Features</h4>
        <h5>Supports 2 player to play simultaneously<br/>Message to winners<br/>Start new game at any point(reset)</h5>
      
        <div>
          <button onClick={() => this.context.newGame()}>New Game</button>
        </div>
        
      </header>
    );
  }
}

Header.contextType = AppContext;

export default Header;
