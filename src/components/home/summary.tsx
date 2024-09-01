import { IoRocket } from "react-icons/io5";
import { summary } from "../../mockData/summary";

const Summary = () => {
    return (
        <div className=" text-white   grid grid-rows-2 gap-4 mx-3">
            <div className=" grid grid-cols-2 gap-4 ">
                {summary.map((item) => {
                    return (
                        <div className="flex justify-between border border-slate-700 bg-black rounded-xl p-4">
                            <div className="bg-black">
                                <p className=" text-xs ">{item.title}</p>
                                <div className=" flex gap-2">
                                    <h2 className="text-base">{item.ratio}</h2>
                                    <h3 className=" text-green-700 text-xs my-auto">
                                        {item.percentage}
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <IoRocket className=" w-full h-full bg-slate-700 p-4 text-blue-600 rounded-xl" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Summary;
