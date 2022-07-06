import React, { Component } from "react";
import classes from './PersonCardComponent.module.css'

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {age : this.props.age}
    }
    render() {
        return (
            <div className={classes.card}>
                <div className={classes.content}>
                    <h1>{this.props.lastName}, {this.props.firstName} </h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button onClick={ () => { this.setState({ age: this.state.age +1 }) } }>
                        BirthDay Button For {this.props.firstName} {this.props.lastName} </button>
                </div>
            </div>
        );
    }
}

export default PersonCard
