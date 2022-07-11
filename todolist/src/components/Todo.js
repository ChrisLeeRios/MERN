const Todo = (props) => {

    /* 
    To conditionally add classes 
    */

    const todoClasses = []

    if (props.todo.completed) {
        todoClasses.push("strike-through")
    }

    return (
        // now that its here it doesnt need the key cause its rended in 
        // a list on the Todo in the app
        // <div key={props.i} >
        <div >

            {/*
    Adding a check box
    We need to connect the state of the checkbox to our todos completed state
    Since complete is inside a state of the dictionary , I can refer to it as 
    its own piece of state
    We also need to use the checked property along with an onClick and a function
    That we pass the index into so we can identify it specifically
    Which does this : if checked then competed is true, if not checked then competed is false
    Thats why we defaulted completed to false in the Dict earlier
     */}

            <input onChange={(event) => {
                props.handleToggleComplete(props.i);
            }} checked={props.todo.completed} type='checkbox' />

            {/* <span>{todo}</span> */}

            {/* 
    Changed to props.todo.text because we changed what was being passed into handleNewTodoSubmit
    from a string of newTodo to todoItem which is an object
    We did this so we can track if the todo was completed by grouping the data both the 
    todo as .text and the true or false of completion with .completed
    */}

            {/* 
    Adding the conditional classes and used .join with a space because classes need to be 
    separated by spaces 
    */}

            <span className={todoClasses.join(" ")}>{props.todo.text}</span>

            {/* 
    onCLick to know when its clicked
    It wants a callback function{(event)} When it executes the call back function
    it gives you the event
    Then call the desired function in this case the delete
    We need to pass in the index which we have access to from the .map index that
    we are inside of,
    so that we are able to specify the one going into the delete todo function
    */}

            <button onClick={(event) => {
                props.handleTodoDelete(props.i);
            }}
                style={{ marginLeft: '10px' }}
            >
                Delete
            </button>
        </div>
    );
};

export default Todo;