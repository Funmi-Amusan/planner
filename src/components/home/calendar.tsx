import { Calendar } from "primereact/calendar";
import { useState } from "react";

const calendar = () => {

    const date = new Date();
    return (
        <div className=" text-white bg-black border border-slate-700 p-5 rounded-xl">
            <div className=" flex justify-between ">
                <h1 className=" ">Calendar</h1>
                <p className=" underline">See all</p>
            </div>
            <div>
                <p>Today</p>
                <h3>Monday, 26 June 2024</h3>
            </div>
        </div>
    );
};

export default calendar;
