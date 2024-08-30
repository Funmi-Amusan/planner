import React from "react";
import TaskItem from "./taskItem";
import { Tasks } from "../../mockData/taskData";

const tasks = () => {
    return (
        <div className=" bg-black text-white work-sans p-5">
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
