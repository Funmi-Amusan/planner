import React from "react";
import { IoBowlingBallOutline } from "react-icons/io5";

const taskItem = ({ title, timeline, app, appImage }: any) => {
    return (
        <div className=" flex justify-between border-b-2 border-white py-2">
            <div className=" flex gap-2 items-center">
                <IoBowlingBallOutline className=" text-blue-600 font-bold" />
                <div>
                    <h3> {title}</h3>
                    <p className=" pl-7 text-xs">{timeline}</p>
                </div>
            </div>
            <div className=" flex flex-col ">
                <div className="w-full flex items-end place-items-end text-end ">
                    <img
                        src={appImage}
                        alt=""
                        className=" w-6 rounded-full  "
                    />
                </div>
                <div className=" flex gap-2">
                    <p className=" text-xs">{app}</p>
                    <img src={appImage} alt="" className=" w-6 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default taskItem;
