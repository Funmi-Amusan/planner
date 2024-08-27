import React from "react";

const taskItem = () => {
    return (
        <div className=" flex justify-between border-b-2 border-white py-2">
            <div className=" flex">
                <p>o</p>
                <div>
                    <h3> UI placement on Fitness App</h3>
                    <p>today till 11:00 am</p>
                </div>
            </div>
            <div className=" flex flex-col">
                <p>9</p>
                <div className=" flex">
                    <p>fitness app</p>
                    <p>0</p>
                </div>
            </div>
        </div>
    );
};

export default taskItem;
