import React from "react";

const Overview = (props) => {
    const {tasks} = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.nr}. {task.text}
                    <button id={task.id}>delete</button>
                </li>
            })}
        </ul>
    );
}

export default Overview;