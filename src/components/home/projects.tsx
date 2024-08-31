import React from "react";
import fitness from "../../assets/2151061445.jpg";

const projects = () => {
    return (
        <div className=" text-white bg-black rounded-xl p-5">
            <div className="flex justify-between">
                <h2>Projects</h2>
                <button>see all</button>
            </div>
            <div className=" grid grid-cols-3 gap-4">
                <div className=" p-2">
                    <img
                        src={fitness}
                        alt=""
                        className=" w-32 rounded-t-xl h-1/2"
                    />
                    <div>
                        <p>
                            App development#1
                            <h2>Fitness App</h2>
                            <p></p>
                            <div className=" flex justify-between">
                                <button className=" border border-blue-700 py-1 px-2 rounded-xl">
                                    View all
                                </button>
                                <div className=" ">
                                    {/* <img
                                        src={fitness}
                                        alt=""
                                        className=" w-4 rounded-full"
                                    /> */}
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
                <div className=" p-2">
                    <img
                        src={fitness}
                        alt=""
                        className=" w-32 rounded-t-xl h-1/2"
                    />
                    <div>
                        <p>
                            App development#1
                            <h2>Fitness App</h2>
                            <p></p>
                            <div className=" flex justify-between">
                                <button className=" border border-blue-700 py-1 px-2 rounded-xl">
                                    View all
                                </button>
                                <div className=" ">
                                    <img
                                        src={fitness}
                                        alt=""
                                        className=" w-4 rounded-full"
                                    />
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col items-center justify-center m-auto bg-slate-600 h-full rounded-xl">
                    <h3 className=" text-center">+</h3>
                    <p>Create a new project</p>
                </div>
            </div>
        </div>
    );
};

export default projects;
