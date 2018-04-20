import { injectGlobal } from 'styled-components';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  ol, ul {
    padding-left: 30px;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    flex-wrap: wrap;
    align-content: center;
    font-family: 'Open Sans', sans-serif;
    background: #141414;
  }

  img{
    position: absolute;
    top:2rem;
  }

  .ticTacToe {
    display: flex;
    justify-content: space-between;
    width: 450px;
    height: 450px;
  }
  .ticTacToe .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ticTacToe .square {
    display: block;
    width: 150px;
    height: 150px;
    border: 1px solid #e4e4e4;
    color: #e4e4e4;
    font-size: 5em;
    font-weight: 100;
    text-align: center;
    font-family: 'Joystix';
    padding: 20px;
  }


  .game {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    flex-wrap: wrap;
    align-content: center;
  }

  .game-info {
    margin-left: 20px;
  }
  .game-board{

  }
  /** Joystix **/
  @font-face {
  	font-family: 'Joystix';
  	src: url('/fonts/Joystix/joystix monospace.eot');
  	src: local('☺'), url('/fonts/Joystix/joystix monospace.woff') format('woff'), url('/fonts/Joystix/joystix monospace.ttf') format('truetype'), url('/fonts/Joystix/joystix monospace.svg') format('svg');
  	font-weight: normal;
  	font-style: normal;
  }

  /** Game Over **/
  @font-face {
  	font-family: 'Game Over';
  	src: url('/fonts/game-over/game_over.eot');
  	src: local('☺'), url('/fonts/game-over/game_over.woff') format('woff'), url('/fonts/game-over/game_over.ttf') format('truetype'), url('/fonts/game-over/game_over.svg') format('svg');
  	font-weight: normal;
  	font-style: normal;
  }

  h1{
  	font-family: 'Joystix';
  }

`;
