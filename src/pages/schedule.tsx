import React from "react";
import Tasks from "../components/home/tasks";
import Calendar from "../components/home/calendar";
import Projects from "../components/home/projects";
import Summary from "../components/home/summary";
import Layout from "../components/layout/layout";

const Schedule = () => {
    return (
        <Layout>
            <div className=" w-full h-full work-sans p-5 ">
                <div className="grid grid-cols-7 gap-5">
                    <div className=" col-span-4 ">
                        <div className=" grid grid-rows-2 gap-1">
                            <div className=" row-span-1 ">
                                <Tasks />
                            </div>
                            <div className=" row-span-1">
                                <Projects />
                            </div>
                        </div>
                    </div>

                    <div className=" col-span-3">
                        <div className=" grid grid-rows-5 gap-1">
                            <div className=" row-span-1">
                                <Summary />
                            </div>
                            <div className=" row-span-5">
                                <Calendar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Schedule;
