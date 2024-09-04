import { RiAccountCircleFill } from "react-icons/ri";
import Workflow from "../assets/illustration-dashboard.webp";
import Layout from "../components/layout2/layout";
import { workflows } from "../mockData/workflows";

const Dashboard = () => {
    return (
        <Layout>
            <div className=" my-10">
                {workflows.map((workflow) => {
                    return (
                        <a href="/workflow">
                            <div className="  my-4 flex justify-center ">
                                <div className=" grid grid-cols-2 gap-7 text-gray-600 w-2/3 shadow-xl p-6 rounded-lg">
                                    <div className="px-6">
                                        <h1 className=" text-2xl font-bold py-4 ">
                                            {workflow.name}
                                        </h1>
                                        <p className=" text-lg">
                                            {workflow.timeDescription}
                                        </p>
                                        <RiAccountCircleFill className=" text-[4rem] my-2 text-gray-500" />
                                    </div>
                                    <div className=" flex justify-end">
                                        <img
                                            src={Workflow}
                                            alt="dashboard analytics"
                                            className=" w-1/2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </Layout>
    );
};

export default Dashboard;
