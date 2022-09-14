import React from "react";
import { useNavigate } from "react-router-dom";
import "./TodoCard.css";

const TodoCard = (props) => {
    const navigate = useNavigate();
    const { todo } = props;
    const { title, completed, id } = todo;
    return (
        <div className="todoCard" onClick={() => navigate(`/todo/${id}`)}>
            <h4>{title}</h4>
            <p>{`Completed: ${completed}`}</p>
        </div>
    );
};

export default TodoCard;
