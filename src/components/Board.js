import React from 'react';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            turn: 'cross',
            gameOver: true
        };
        this.changeTurn = this.changeTurn.bind(this);
        this.gameReset = this.gameReset.bind(this);
        this.checkGameOver = this.checkGameOver.bind(this);
    }

    changeTurn = (box) => {
        //console.log(box.getAttribute('box-id'))
        //console.log(this.refs.box1.innerHTML)
        //let boxID = box.getAttribute('box-id');
        if (box.innerHTML === '') {
            if (this.state.turn==='cross'){
                box.innerHTML = 'x'
                this.checkGameOver();
                this.setState({
                    turn: 'circle',
                })
            } else {
                box.innerHTML = 'o'
                this.checkGameOver();
                this.setState({
                    turn: 'cross',
                })
            }
        } else {
            alert('This box has already been marked!');
        }
        
    }

    gameReset = () => {
        if (this.state.gameOver === true){
            this.refs.box1.innerHTML = '';
            this.refs.box2.innerHTML = '';
            this.refs.box3.innerHTML = '';
            this.refs.box4.innerHTML = '';
            this.refs.box5.innerHTML = '';
            this.refs.box6.innerHTML = '';
            this.refs.box7.innerHTML = '';
            this.refs.box8.innerHTML = '';
            this.refs.box9.innerHTML = '';
        }
        this.setState({
            turn: 'cross',
            gameOver: true
        })
        
    }

    checkGameOver = () => {
        //Check if every box is marked
        if ((this.refs.box1.innerHTML!=='')&&(this.refs.box2.innerHTML!=='')&&(this.refs.box3.innerHTML!=='')&&(this.refs.box4.innerHTML!=='')&&(this.refs.box5.innerHTML!=='')&&(this.refs.box6.innerHTML!=='')&&(this.refs.box7.innerHTML!=='')&&(this.refs.box8.innerHTML!=='')&&(this.refs.box9.innerHTML!=='')){
            alert('Game Over! Draw!');
            this.gameReset();
        }

        //Rows
        if ((this.refs.box1.innerHTML === this.refs.box2.innerHTML) && (this.refs.box2.innerHTML === this.refs.box3.innerHTML) && (this.refs.box1.innerHTML==='x')){
            alert('Game Over! X Wins!');
            this.gameReset();
        } else if ((this.refs.box1.innerHTML === this.refs.box2.innerHTML) && (this.refs.box2.innerHTML === this.refs.box3.innerHTML) && (this.refs.box1.innerHTML==='o')){
            alert('Game Over! O Wins!');
            this.gameReset();
        }else if ((this.refs.box4.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box6.innerHTML) && (this.refs.box4.innerHTML==='x')){
            alert('Game Over! X Wins!');
            this.gameReset();
        }else if ((this.refs.box4.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box6.innerHTML) && (this.refs.box4.innerHTML==='o')){
            alert('Game Over! O Wins!');
            this.gameReset();
        } else if ((this.refs.box7.innerHTML === this.refs.box8.innerHTML) && (this.refs.box8.innerHTML === this.refs.box9.innerHTML) && (this.refs.box7.innerHTML==='x')){
            alert('Game Over! X Wins!');
            this.gameReset();
        } else if ((this.refs.box7.innerHTML === this.refs.box8.innerHTML) && (this.refs.box8.innerHTML === this.refs.box9.innerHTML) && (this.refs.box7.innerHTML==='o')){
            alert('Game Over! O Wins!');
            this.gameReset();
        }
        //Columns
        else if ((this.refs.box1.innerHTML === this.refs.box4.innerHTML) && (this.refs.box4.innerHTML === this.refs.box7.innerHTML) && (this.refs.box1.innerHTML==='x')){
            alert('Game Over! X Wins!');
            this.gameReset();
        } else if ((this.refs.box1.innerHTML === this.refs.box4.innerHTML) && (this.refs.box4.innerHTML === this.refs.box7.innerHTML) && (this.refs.box1.innerHTML==='o')){
            alert('Game Over! O Wins!');
            this.gameReset();
        } else if ((this.refs.box2.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box8.innerHTML) && (this.refs.box2.innerHTML==='x')){
            alert('Game Over! X Wins!');
            this.gameReset();
        } else if ((this.refs.box2.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box8.innerHTML) && (this.refs.box2.innerHTML==='o')){
            alert('Game Over! O Wins!');
            this.gameReset();
        } else if ((this.refs.box3.innerHTML === this.refs.box6.innerHTML) && (this.refs.box6.innerHTML === this.refs.box9.innerHTML) && (this.refs.box3.innerHTML==='x')){
            alert('Game Over! X Wins!');
            this.gameReset();
        } else if ((this.refs.box3.innerHTML === this.refs.box6.innerHTML) && (this.refs.box6.innerHTML === this.refs.box9.innerHTML) && (this.refs.box3.innerHTML==='o')){
            alert('Game Over! O Wins!');
            this.gameReset();
        }
        //Diagonals
        else if ((this.refs.box1.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box9.innerHTML) && (this.refs.box1.innerHTML==='x')){
            alert('Game Over! X Wins!');
            this.gameReset();
        } else if ((this.refs.box1.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box9.innerHTML) && (this.refs.box1.innerHTML==='o')){
            alert('Game Over! O Wins!');
            this.gameReset();
        } else if ((this.refs.box3.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box7.innerHTML) && (this.refs.box3.innerHTML==='x')){
            alert('Game Over! X Wins!');
            this.gameReset();
        }else if ((this.refs.box3.innerHTML === this.refs.box5.innerHTML) && (this.refs.box5.innerHTML === this.refs.box7.innerHTML) && (this.refs.box3.innerHTML==='o')){
            alert('Game Over! O Wins!');
            this.gameReset();
        }

    }

    render () {
        return (
            <div className='container'>
                <div className='row' onClick={ (e)=>this.changeTurn(e.target)}>
                    <div className='col-4 box' box-id='1' ref='box1'></div>
                    <div className='col-4 box' box-id='2' ref='box2'></div>
                    <div className='col-4 box' box-id='3' ref='box3'></div>
                    <div className='col-4 box' box-id='4' ref='box4'></div>
                    <div className='col-4 box' box-id='5' ref='box5'></div>
                    <div className='col-4 box' box-id='6' ref='box6'></div>
                    <div className='col-4 box' box-id='7' ref='box7'></div>
                    <div className='col-4 box' box-id='8' ref='box8'></div>
                    <div className='col-4 box' box-id='9' ref='box9'></div>                
                </div>
            </div>
        );
    }
}

export default Board;