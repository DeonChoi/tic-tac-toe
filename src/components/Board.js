import React from 'react';
import Box from './Box';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            turn: 'cross',
            gameOver: false
        };
        this.changeTurn = this.changeTurn.bind(this);

    }

    changeTurn = () => {
        if (this.state.turn==='cross'){
            this.setState({
                turn: 'circle'
            })
        } else {
            this.setState({
                turn: 'cross'
            })
        }
    }

    render () {
        return (
            <div className='container'>
                <div className='row'>
                    <Box turn={this.state.turn} changeTurn={this.changeTurn}/>
                    <Box turn={this.state.turn} changeTurn={this.changeTurn}/>
                    <Box turn={this.state.turn} changeTurn={this.changeTurn}/>
                    <Box turn={this.state.turn} changeTurn={this.changeTurn}/>
                    <Box turn={this.state.turn} changeTurn={this.changeTurn}/>
                    <Box turn={this.state.turn} changeTurn={this.changeTurn}/>
                    <Box turn={this.state.turn} changeTurn={this.changeTurn}/>
                    <Box turn={this.state.turn} changeTurn={this.changeTurn}/>
                    <Box turn={this.state.turn} changeTurn={this.changeTurn}/>
                </div>
            </div>
        );
    }
}

export default Board;