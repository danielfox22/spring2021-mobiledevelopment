import React from 'react';

class Candy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sets: 0,
            reps: 0
        };
    };

    render() {
        return (
            <div>
                <h2>Candy</h2>
                <h3>Eaten: {this.state.sets}</h3>
                <h3>Remaining: {this.state.reps}</h3>
                <button onClick={() => this.setState({sets: this.state.sets + 1})}>Eaten</button>
                <button onClick={() => this.setState({reps: this.state.reps + 1})}>Remaining</button>
                <button onClick={() => this.setState({sets: 0, reps: 0})}>Reset Counter</button>
                
            </div>
        );
    }
}

export default Candy;