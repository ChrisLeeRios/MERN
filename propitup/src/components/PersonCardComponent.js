// import React, { Component } from "react";
import React, { useState } from "react";
import classes from './PersonCardComponent.module.css'



// class PersonCard extends Component {
//     constructor(props){
//         super(props);
//         this.state = {age : this.props.age}
//     }
//     // could have done thid login in a function like so 
//     // changeAge = () => {this.setState({ age: this.state.age +1 });};
//     // and the set the button onClick=(this.chanegAge)
//     render() {
//         return (
//             <div className={classes.card}>
//                 <div className={classes.content}>
//                     <h1>{this.props.lastName}, {this.props.firstName} </h1>
//                     <p>Age: {this.state.age}</p>
//                     <p>Hair Color: {this.props.hairColor}</p>
//                     <button onClick={ () => { this.setState({ age: this.state.age +1 }) } }>
//                         BirthDay Button For {this.props.firstName} {this.props.lastName} </button>
//                 </div>
//             </div>
//         );
//     }
// }
const PersonCard = props => {
    const [state, setState] = useState({
        age: props.age
    });
    const chanegAge = () => {
        setState({
            age: state.age +1
        })
    }
    return (
        <div className={classes.card}>
            <div className={classes.content}>
                <h1>{props.lastName}, {props.firstName} </h1>
                <p>Age: {state.age}</p>
                <p>Hair Color: {props.hairColor}</p>
                <button onClick={chanegAge}>
                    BirthDay Button For {props.firstName} {props.lastName} </button>
            </div>
        </div>
    );
}


export default PersonCard
