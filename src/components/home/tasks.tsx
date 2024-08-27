import React from "react";
import TaskItem from "./taskItem";
import { Tasks } from "../../mockData/taskData";

import { Paginator } from "primereact/paginator";

const tasks = () => {
    return (
        <div className=" bg-[#1c1f25] text-white work-sans">
            <div className=" flex justify-between">
                <h2>My tasks</h2>
                <button className=" underline">See all</button>
            </div>
            {Tasks.map((task: any) => (
                <TaskItem
                    title={task.title}
                    timeline={task.timeline}
                    app={task.app}
                    appImage={task.appImage}
                />
            ))}
        </div>
    );
};

export default tasks;
