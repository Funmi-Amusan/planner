import React from "react";
import fitness from "../../assets/dylan-calluy-j-uwuuPHNeQ-unsplash.jpg";

const projects = () => {
    return (
        <div className=" w-full text-white">
            <div className="flex justify-between">
                <h2>Projects</h2>
                <button>see all</button>
            </div>
            <div>
                <div>
                    {/* <img src={fitness} alt="" className=" w-32 rounded-lg" /> */}
                    <div>
                        <p>
                            App development#1
                            <h2>Fitness App</h2>
                            <p></p>
                            <div className=" flex justify-between">
                                <button>view all</button>
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
            </div>
        </div>
    );
};

export default projects;
