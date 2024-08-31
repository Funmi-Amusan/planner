import React from "react";
import Tasks from "./tasks";
import Calendar from "./calendar";
import Projects from "./projects";
import Summary from "./summary";

const home = () => {
    return (
        <div className=" w-full h-full  work-sans ">
            <div className="grid grid-cols-2 gap-5">
                <div className=" grid grid-rows-7">
                    <div className=" row-span-4 ">
                        <Tasks />
                    </div>
                    <div className=" row-span-3">
                        <Projects />
                    </div>
                </div>

                <div className=" grid grid-rows-5 gap-4">
                    <div className=" row-span-1">
                        <Summary />
                    </div>
                    <div className=" row-span-5">
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;
