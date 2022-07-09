import React, {useState} from "react";
import classes from './BoxDisplay.module.css'


const BoxForm = (props) => {
    const [color, setColor] = useState("")
    const [colorError, setColorError] = useState("")
    const {/* color, */ createBox/* , handleColorChange */} = props;
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const handleColorChange = (e) => {
        setColor(e.target.value)
        if(e.target.value.length < 1){
            setColorError("Must Enter a color")
        }else{
            setColorError("")
        }   
    }

    // const createBox = (e) => {
    //     e.preventDefault();
    //     props.inputs(color)
    //     // setHasBeenSubmitted(true)
    // };

    return (
        <>
            <h3>Create A New Box</h3>
        <form onSubmit={(e) => createBox(e, color)} >
            <div >
                <label>Color:</label>
                <input type="text" onChange={handleColorChange} value={color} />
                {
                    colorError ?
                        <p style={{color : 'grey'}}>{colorError}</p> : ''
                }
            </div>
            <input type="submit" value="Create Box" />
        </form>
        </>
    )
}

export default BoxForm;