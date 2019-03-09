import React, {Component} from 'react';
import {Stage} from 'react-konva';
import {Board, Squares} from '../styled/TicTacToe';

class TicTacToe extends Component {

    state = {
        rows: 3,
        gameState: new Array(9).fill(false),
        ownMark: 'X',
        otherMark: 'O',
        yourTurn: true,
        win: false,
        winner: false,
        gameOver: false,
    }

    componentWillMount() {
        // accessing the browser's window capabilities
        let height = window.innerHeight;
        let width = window.innerWidth;

        // since TicTacToe is a square => i need only 1 size variable,
        // going to use the smaller one to make sure it fits on the screen
        let size = (height < width) ? height * .8 : width * .8;

        let rows = this.state.rows;

        // this is the size of each square in the board
        let unit = size / rows

        // coordinates for 9 squares
        let coordinates = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < rows; x++) {
                coordinates.push([x*unit, y*unit])
            }
        }

        // when my component mount => i will have these 3 vars
        this.setState({     // Object initializer shorthand
            size,
            rows,
            unit,
            coordinates
        });
    }

    move = (marker, index) => {
        console.log('Move: ', marker, index);
    }

    render() {
        let {
            unit,
            size,
            rows,
            coordinates,
            gameState,
            win,
            gameOver,
            yourTurn,
            ownMark
        } = this.state;

        return (
          <div>
              <Stage width={size} height={size}>
                  <Board unit={unit} size={size} rows={rows}/>
                  <Squares
                      unit={unit}
                      coordinates={coordinates}
                      gameState={gameState}
                      win={win}
                      gameOver={gameOver}
                      yourTurn={yourTurn}
                      ownMark={ownMark}
                      move={this.move}
                  />
              </Stage>
          </div>
        )
    }
}

export default TicTacToe;
