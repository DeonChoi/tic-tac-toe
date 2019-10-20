import React from 'react';

class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mark: '',  
            // turn: 'cross',
            //gameOver: false
        };
        this.changeMark = this.changeMark.bind(this);
    }

    changeMark = (e) => {

        //changing mark
        if (this.state.mark===''){
            console.log(e.target.value);
            if (this.props.turn === 'cross'){
                this.setState({
                    mark: 'x',
                    // turn: 'circle'
                });
                this.props.changeTurn();
            } else if (this.props.turn === 'circle'){
                this.setState({
                    mark: 'o',
                    //turn: 'cross'
                });
                this.props.changeTurn();
            }       
        } else {
            alert('This box has already been marked.');
        }
        
        //changing turn from props
       
        
        
    }

    render () {
        return (
            <button type="button" className='col-4 btn btn-secondary' onClick={this.changeMark}>
                {this.state.mark}
            </button>
        );
    }
}

export default Box;