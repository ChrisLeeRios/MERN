import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import './Todos.css'

const Todos = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            console.log(res.data);
            const fetchedTodos = res.data;
            setTodos(fetchedTodos);
        });
    }, []);

    return (
        <>
            {todos ? (
                <div className="todos">
                    {todos.slice(0, 10).map((todo) => (
                        <TodoCard key={todo.id} todo={todo} />
                    ))}
                </div>
            ) : (
                <CircularProgress />
            )}
        </>
    );
};

export default Todos;
