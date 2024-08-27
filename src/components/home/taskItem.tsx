import React from "react";

const taskItem = ({ title, timeline, app, appImage }: any) => {
    return (
        <div className=" flex justify-between border-b-2 border-white py-2">
            <div className=" flex">
                <p>o</p>
                <div>
                    <h3> {title}</h3>
                    <p>{timeline}</p>
                </div>
            </div>
            <div className=" flex flex-col">
                <p>9</p>
                <div className=" flex">
                    <p>{app}</p>
                    <p>{appImage}</p>
                </div>
            </div>
        </div>
    );
};

export default taskItem;
