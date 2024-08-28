import React from "react";
import Tasks from "./tasks";
import Calendar from "./calendar";

const home = () => {
    return (
        <div className=" w-full h-full  work-sans ">
            <div className="grid grid-cols-2 gap-5 h-screen">
                <div>
                    <div className=" h-3/5 ">
                        <Tasks />
                    </div>
                    <div className=" h-2/5">projects</div>
                </div>

                <div>
                    <div>summary</div>
                    <div>
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;
