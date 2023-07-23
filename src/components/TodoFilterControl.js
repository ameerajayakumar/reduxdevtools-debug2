import React from "react";
import { useState, useEffect } from "react"
import store from "../todoStore"

let statuses = [
    { id: "all", title: "All" },
    { id: "active", title: "Active" },
    { id: "completed", title: "Completed" }
]

const TodoFilterControl = () => {
    // let filterStatus = "all";
    // let filterStatus = store.getState().filterStatus;
    let [filterStatus, setFilterStatus] = useState(store.getState().filterStatus);

    useEffect(() => {
        store.subscribe(() => {setFilterStatus(store.getState().filterStatus)})
    }, []);

    return (
        <div className="control-btn group">
            {statuses.map((status, idx) => {
                return (
                    <button
                        id={status.id}
                        className={filterStatus === status.id ? "btn active" : "btn"}
                        onClick={() => store.dispatch({type: "CHANGE_FILTER_STATUS", status: status.id})}
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