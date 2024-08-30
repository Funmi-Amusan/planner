import { IoRocket } from "react-icons/io5";

const summary = () => {
    return (
        <div className=" text-white   grid grid-rows-2 gap-4 mx-3">
            <div className=" grid grid-cols-2 gap-4 ">
                <div className="flex justify-between bg-black rounded-xl p-4">
                    <div className="bg-black">
                        <p>Today's Productivity</p>
                        <div className=" flex gap-2">
                            <h2>10/8</h2>
                            <h3 className=" text-green-700">+55%</h3>
                        </div>
                    </div>
                    <div>
                        <IoRocket className=" w-full h-full bg-slate-700 p-4 text-blue-600 rounded-xl" />
                    </div>
                </div>

                <div className="flex justify-between bg-black rounded-xl p-4">
                    <div className="bg-black">
                        <p>Today's Productivity</p>
                        <div className=" flex gap-2">
                            <h2>10/8</h2>
                            <h3 className=" text-green-700">+55%</h3>
                        </div>
                    </div>
                    <div>
                        <IoRocket className=" w-full h-full bg-slate-700 p-4 text-blue-600 rounded-xl" />
                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-2 gap-4 ">
                <div className="flex justify-between bg-black rounded-xl p-4">
                    <div className="bg-black">
                        <p>Today's Productivity</p>
                        <div className=" flex gap-2">
                            <h2>10/8</h2>
                            <h3 className=" text-green-700">+55%</h3>
                        </div>
                    </div>
                    <div>
                        <IoRocket className=" w-full h-full bg-slate-700 p-4 text-blue-600 rounded-xl" />
                    </div>
                </div>

                <div className="flex justify-between bg-black rounded-xl p-4">
                    <div className="bg-black">
                        <p>Today's Productivity</p>
                        <div className=" flex gap-2">
                            <h2>10/8</h2>
                            <h3 className=" text-green-700">+55%</h3>
                        </div>
                    </div>
                    <div>
                        <IoRocket className=" w-full h-full bg-slate-700 p-4 text-blue-600 rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default summary;
