import React, {Component} from 'react';
import {Stage} from 'react-konva';
import Board from '../styled/TicTacToe';

class TicTacToe extends Component {

    state = {
        rows: 3,
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

        // when my component mount => i will have these 3 vars
        this.setState({     // Object initializer shorthand
            size,
            rows,
            unit
        });
    }

    render() {
        let {unit, size, rows} = this.state;

        return (
          <div>
              <Stage width={size} height={size}>
                  <Board unit={unit} size={size} rows={rows}/>
                  {/*<Squares />*/}
              </Stage>
          </div>
        )
    }
}

export default TicTacToe;
