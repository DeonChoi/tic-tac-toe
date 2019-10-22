import React from 'react';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            turn: 'cross',
            draw: false,
            boxFlashRed: false,
            xWin: false,
            oWin: false,
            gameOver: false,
            disabled: false
        };
        this.changeTurn = this.changeTurn.bind(this);
        this.gameReset = this.gameReset.bind(this);
        this.checkGameOver = this.checkGameOver.bind(this);
        this.gameDraw = this.gameDraw.bind(this);
        this.xWins = this.xWins.bind(this);
        this.oWins = this.oWins.bind(this);
    }

    changeTurn = (box) => {
        //console.log(box.getAttribute('box-id'))
        //console.log(this.refs.box1.innerHTML)
        //let boxID = box.getAttribute('box-id');
        //console.log(box);
        
        if (box.innerHTML === '') {
            if (this.state.turn==='cross'){
                box.innerHTML = 'x'
                this.checkGameOver();
                this.setState({
                    turn: 'circle',
                    boxFlashRed: false
                })
            } else {
                box.innerHTML = 'o'
                this.checkGameOver();
                this.setState({
                    turn: 'cross',
                    boxFlashRed: false
                })
            }
        } else {
            this.setState({
                boxFlashRed: true
            });
        }
        
    }

    gameReset = () => {
        // if (this.state.gameOver === false){
            this.refs.box1.innerHTML = '';
            this.refs.box2.innerHTML = '';
            this.refs.box3.innerHTML = '';
            this.refs.box4.innerHTML = '';
            this.refs.box5.innerHTML = '';
            this.refs.box6.innerHTML = '';
            this.refs.box7.innerHTML = '';
            this.refs.box8.innerHTML = '';
            this.refs.box9.innerHTML = '';
        //}
        this.setState({
            turn: 'cross',
            xWin: false,
            oWin: false,
            draw: false,
            disabled: false,
            gameOver: false
        })
        
    }
    
    gameDraw = () => {
        this.setState({
            draw: true,
            disabled: true
        });
    }
    xWins = () => {
        this.setState({
            xWin: true,
            disabled: true
        });
    }
    oWins = () => {
        this.setState({
            oWin: true,
            disabled: true
        });
    }

    checkGameOver = () => {
        //Check if every box is marked
        if ((this.refs.box1.innerHTML!=='')&&(this.refs.box2.innerHTML!=='')&&(this.refs.box3.innerHTML!=='')&&(this.refs.box4.innerHTML!=='')&&(this.refs.box5.innerHTML!=='')&&(this.refs.box6.innerHTML!=='')&&(this.refs.box7.innerHTML!=='')&&(this.refs.box8.innerHTML!=='')&&(this.refs.box9.innerHTML!=='')){
            this.gameDraw();
        }

        //Rows - Check for matches in Rows
        if ((this.refs.box1.innerHTML === this.refs.box2.innerHTML) && (this.refs.box2.innerHTML === this.refs.box3.innerHTML) && (this.refs.box1.innerHTML==='x')){
            this.xWins();
        } else if ((this.refs.box1.innerHTML === this.refs.box2.innerHTML) && (this.refs.box2.innerHTML === this.refs.box3.innerHTML) && (this.refs.box1.innerHTML==='o')){
            this.oWins();
        }else if ((this.refs.box4.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box6.innerHTML) && (this.refs.box4.innerHTML==='x')){
            this.xWins();
        }else if ((this.refs.box4.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box6.innerHTML) && (this.refs.box4.innerHTML==='o')){
            this.oWins();
        } else if ((this.refs.box7.innerHTML === this.refs.box8.innerHTML) && (this.refs.box8.innerHTML === this.refs.box9.innerHTML) && (this.refs.box7.innerHTML==='x')){
            this.xWins();
        } else if ((this.refs.box7.innerHTML === this.refs.box8.innerHTML) && (this.refs.box8.innerHTML === this.refs.box9.innerHTML) && (this.refs.box7.innerHTML==='o')){
            this.oWins();
        }
        //Columns - Check for matches in Columns
        else if ((this.refs.box1.innerHTML === this.refs.box4.innerHTML) && (this.refs.box4.innerHTML === this.refs.box7.innerHTML) && (this.refs.box1.innerHTML==='x')){
            this.xWins();
        } else if ((this.refs.box1.innerHTML === this.refs.box4.innerHTML) && (this.refs.box4.innerHTML === this.refs.box7.innerHTML) && (this.refs.box1.innerHTML==='o')){
            this.oWins();
        } else if ((this.refs.box2.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box8.innerHTML) && (this.refs.box2.innerHTML==='x')){
            this.xWins();
        } else if ((this.refs.box2.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box8.innerHTML) && (this.refs.box2.innerHTML==='o')){
            this.oWins();
        } else if ((this.refs.box3.innerHTML === this.refs.box6.innerHTML) && (this.refs.box6.innerHTML === this.refs.box9.innerHTML) && (this.refs.box3.innerHTML==='x')){
            this.xWins();
        } else if ((this.refs.box3.innerHTML === this.refs.box6.innerHTML) && (this.refs.box6.innerHTML === this.refs.box9.innerHTML) && (this.refs.box3.innerHTML==='o')){
            this.oWins();
        }
        //Diagonals - Check for matches in Diagonals
        else if ((this.refs.box1.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box9.innerHTML) && (this.refs.box1.innerHTML==='x')){
            this.xWins();
        } else if ((this.refs.box1.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box9.innerHTML) && (this.refs.box1.innerHTML==='o')){
            this.oWins();
        } else if ((this.refs.box3.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box7.innerHTML) && (this.refs.box3.innerHTML==='x')){
            this.xWins();
        }else if ((this.refs.box3.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box7.innerHTML) && (this.refs.box3.innerHTML==='o')){
            this.oWins();
        }

    }

    render () {


        return (
            <div className='container'>
                
                <div className='row board' flash={ this.state.boxFlashRed ? 'yesFlash' : 'noFlash' } disabled={this.state.disabled}>

                    <div className='col-4 top-left' box-id='1' ref='box1' onClick={ (e)=>this.changeTurn(e.target)} /> 
                    <div className='col-4 top-middle' box-id='2' ref='box2' onClick={ (e)=>this.changeTurn(e.target)} /> 
                    <div className='col-4 top-right' box-id='3' ref='box3' onClick={ (e)=>this.changeTurn(e.target)} /> 
                    <div className='col-4 middle-left' box-id='4' ref='box4' onClick={ (e)=>this.changeTurn(e.target)} /> 
                    <div className='col-4 middle' box-id='5' ref='box5' onClick={ (e)=>this.changeTurn(e.target)} /> 
                    <div className='col-4 middle-right' box-id='6' ref='box6' onClick={ (e)=>this.changeTurn(e.target)} /> 
                    <div className='col-4 bottom-left' box-id='7' ref='box7' onClick={ (e)=>this.changeTurn(e.target)} /> 
                    <div className='col-4 bottom-middle' box-id='8' ref='box8' onClick={ (e)=>this.changeTurn(e.target)} />
                    <div className='col-4 bottom-right' box-id='9' ref='box9' onClick={ (e)=>this.changeTurn(e.target)} />        

                </div>

                <div className='row turn-indicator'>

                    <div className='col-3'>
                        Turn: {this.state.turn === 'cross' ? 'X' : 'O'}
                    </div>

                    <div className='col-3 offset-6'>
                        <button type='button' className='btn btn-primary' onClick={this.gameReset}>Reset Game</button>
                    </div>

                </div>

                <div className='row result-indicator'>

                    <div>
                        {this.state.draw === true ? 'Game Over! Draw!' : ''}  
                        {this.state.xWin === true ? 'Game Over! X Wins!' : ''}  
                        {this.state.oWin === true ? 'Game Over! O Wins!' : ''}               
                    </div>

                </div>

            </div>
        );
    }
}

export default Board;