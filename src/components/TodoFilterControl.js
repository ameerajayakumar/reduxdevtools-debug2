import React from "react";
import { useState, useEffect } from "react"
import store from "../todoStore"
// import {changeFilterStatus} from "../todoStore";
import {changeFilterStatus} from "../actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


let statuses = [
    { id: "all", title: "All" },
    { id: "active", title: "Active" },
    { id: "completed", title: "Completed" }
]

const TodoFilterControl = () => {
    // let filterStatus = "all";
    // let filterStatus = store.getState().filterStatus;
    // let [filterStatus, setFilterStatus] = useState(store.getState().todoReducer.filterStatus);
    const filterStatus = useSelector(state => state.todoReducer.filterStatus);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     store.subscribe(() => {setFilterStatus(store.getState().todoReducer.filterStatus)})
    // }, []);

    return (
        <div className="control-btn group">
            {statuses.map((status, idx) => {
                return (
                    <button
                        id={status.id}
                        className={filterStatus === status.id ? "btn active" : "btn"}
                        // onClick={() => store.dispatch(changeFilterStatus(status.id))}
                        onClick={() => dispatch(changeFilterStatus(status.id))}
                        key={idx}
                    >
                        {status.title}
                    </button>
                )
            }
            )}
        </div>
    );
};

export default TodoFilterControl;