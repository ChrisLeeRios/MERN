import React, {useState} from "react";
import classes from './BoxDisplay.module.css'

const BoxDisplay = (props) => {
    return (
        <div>
            <p style={{backgroundColor: props.color }} className={classes.boxes}></p>
        </div>
    )
}

export default BoxDisplay;