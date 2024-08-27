import React from "react";
import TaskItem from "./taskItem";

const tasks = () => {
    return (
        <div className=" bg-[#1c1f25] text-white work-sans">
            <div className=" flex justify-between">
                <h2>My tasks</h2>
                <button className=" underline">See all</button>
            </div>
            <TaskItem />
        </div>
    );
};

export default tasks;
