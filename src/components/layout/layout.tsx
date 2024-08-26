import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const layout = () => {
    return (
        <div className=" bg-[#1C1F25]">
            <div className="flex align-top">
                <Sidebar />
                <div className="h-fit w-full">
                    <Header />
                </div>
            </div>
        </div>
    );
};

export default layout;
