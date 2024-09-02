import * as React from "react";
import Pagination from "@mui/material/Pagination";
import TaskItem from "./taskItem";
import { Tasks } from "../../mockData/taskData";
import Stack from "@mui/material/Stack";

const tasks = () => {
    const whiteTextStyle = {
        "& .MuiPaginationItem-root": {
            color: "white"
        }
    };

    return (
        <div className=" bg-black border border-slate-700 text-white work-sans rounded-xl p-5">
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
            <div className=" flex justify-end place-items-end place-self-end mt-2">
                <div className=" w-fit ">
                    <Stack spacing={2}>
                        <Pagination
                            count={10}
                            color="primary"
                            variant="text"
                            shape="rounded"
                            sx={whiteTextStyle}
                        />
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default tasks;
