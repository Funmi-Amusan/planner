import React from "react";
import fitness from "../../assets/2151061445.jpg";

const projects = () => {
    return (
        <div className=" text-white rounded-xl p-5">
            <div className="flex justify-between">
                <h2>Projects</h2>
                <button>see all</button>
            </div>
            <div className=" grid grid-cols-3 gap-4">
                <div className=" px-2 py-4 shadow-[0_3px_6px_0px_rgba(255,255,255,0.1)]">
                    <img
                        src={fitness}
                        alt=""
                        className=" w-fit rounded-t-xl h-1/2"
                    />
                    <div className=" py-2">
                        <p className=" text-xs font-light">App development#1</p>
                        <h2>Fitness App</h2>
                        <p className=" text-[0.5rem] font-light py-2">
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters.
                        </p>
                        <div className=" flex justify-between">
                            <button className=" border border-blue-700 text-sm py-0.5 px-2 rounded-lg">
                                View all
                            </button>
                            <div className=" align-bottom flex   ">
                                <img
                                    src={fitness}
                                    alt=""
                                    className=" w-6 rounded-full align-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" p-2 shadow-[0_3px_6px_0px_rgba(255,255,255,0.1)]">
                    <img
                        src={fitness}
                        alt=""
                        className=" w-fit rounded-t-xl h-1/2"
                    />
                    <div className=" py-2">
                        <p className=" text-xs font-light">App development#1</p>
                        <h2>Fitness App</h2>
                        <p className=" text-[0.5rem] font-light py-2">
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters.
                        </p>
                        <div className=" flex justify-between">
                            <button className=" border border-blue-700 text-sm py-0.5 px-2 rounded-lg">
                                View all
                            </button>
                            <div className=" align-bottom flex   ">
                                <img
                                    src={fitness}
                                    alt=""
                                    className=" w-6 rounded-full align-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col items-center justify-center m-auto px-4 text-sm bg-slate-600 h-full rounded-xl">
                    <h3 className=" text-center">+</h3>
                    <p>Create a new project</p>
                </div>
            </div>
        </div>
    );
};

export default projects;
