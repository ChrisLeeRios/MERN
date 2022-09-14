import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Todo = () => {
    const { id } = useParams();
    const [todoDetails, setTodoDetails] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => {
                const fetchedTodo = res.data;
                setTodoDetails(fetchedTodo);
            });
    }, [id]);

    const { id: todoId, userId, title, completed } = todoDetails || {};

    return (
        <>
            {todoDetails ? (
                <div>
                    <h3>Todo ID: {todoId} </h3>
                    <h3>TUser Id: {userId} </h3>
                    <h3>Title: {title} </h3>
                    <h3>{`Completed: ${completed}`}</h3>
                </div>
            ) : (
                <CircularProgress />
            )}
            <button style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                BACK TO MAIN PAGE
            </button>
        </>
    );
};

export default Todo;
