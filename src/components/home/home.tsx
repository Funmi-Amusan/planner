import React from "react";
import Tasks from "./tasks";

const home = () => {
    return (
        <div className=" w-full h-full ">
            <div className="grid grid-cols-2 h-screen">
                <div>
                    <div className=" h-3/5 ">
                        <Tasks />
                    </div>
                    <div className=" h-2/5">projects</div>
                </div>

                <div>
                    <div>summary</div>
                    <div>calendar</div>
                </div>
            </div>
        </div>
    );
};

export default home;
