import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const layout = ({ children }: any) => {
    return (
        <div className=" bg-[#1C1F25]">
            <div className="flex align-top">
                <Sidebar />
                <div className="h-fit w-full">
                    <Header />
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default layout;
