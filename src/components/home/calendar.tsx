import React from "react";

const calendar = () => {
    return (
        <div className=" text-white">
            <div className=" flex justify-between ">
                <h1>Calendar</h1>
                <p className=" underline">See all</p>
            </div>
            <div>
                <p>Today</p>
                <h3>Monday, 26 June 2024</h3>
            </div>
            <div>
                <div>
                    <div className=" flex flex-col gap-2 border border-blue-600 rounded-xl p-2 w-fit text-center">
                        <h3>Mon</h3>
                        <p>26</p>
                    </div>
                    <div>
                        <div className="bg-slate-600 w-full border-l-4 rounded-md border-blue-600 p-3">
                            <h3>Task Planning</h3>
                            <p>Review daily tasks and set priorities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default calendar;
