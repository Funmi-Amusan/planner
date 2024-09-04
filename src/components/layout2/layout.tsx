import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const layout = ({ children }: any) => {
    return (
        <div className=" bg-white dark:bg-black">
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
