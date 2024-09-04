import {
    IoCalendarOutline,
    IoCalendar,
    IoMail,
    IoTimer,
    IoStar,
    IoRadioButtonOn,
    IoRocket
} from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiUserMinus, FiMoreVertical } from "react-icons/fi";

const sidebar = () => {
    return (
        <div className=" flex flex-col items-center work-sans h-screen text-white w-64 p-6 gap-y-12 dark:bg-black bg-red border border-slate-700">
            {/* header */}
            <div className=" w-full flex text-2xl items-center justify-start text-start gap-3">
                <IoCalendarOutline />
                <h1>Planner</h1>
            </div>
            {/* nav */}
            <div className=" flex flex-col w-full text-xl gap-y-3 ">
                <nav className=" capitalize flex justify-between ">
                    <div className=" items-center flex gap-2">
                        <AiFillHome />
                        <h1 className="text-base">Home</h1>
                    </div>
                    <FiMoreVertical />
                </nav>
                <nav className=" capitalize flex justify-between ">
                    <div className=" items-center flex gap-2">
                        <IoCalendar />
                        <h1 className="text-base">calendar</h1>
                    </div>
                    <FiMoreVertical />
                </nav>
                <nav className=" capitalize flex justify-between ">
                    <div className=" items-center flex gap-2">
                        <IoMail />
                        <h1 className="text-base">inbox</h1>
                    </div>
                    <FiMoreVertical />
                </nav>
                <nav className=" capitalize flex justify-between ">
                    <div className=" items-center flex gap-2">
                        <IoTimer />
                        <h1 className="text-base">productivity</h1>
                    </div>
                    <FiMoreVertical />
                </nav>
            </div>

            {/* favourite */}
            <div className=" w-full ">
                <nav className=" capitalize flex justify-between mb-4">
                    <div className=" items-center flex gap-2">
                        <IoStar />
                        <h1>favourite</h1>
                    </div>
                    <FaChevronDown />
                </nav>
                <div className=" ml-5 flex flex-col gap-y-2 ">
                    <nav className=" capitalize flex justify-between ">
                        <div className=" items-center flex gap-2">
                            <IoRadioButtonOn />
                            <h1>favourite</h1>
                        </div>
                        <p>23</p>
                    </nav>
                    <nav className=" capitalize flex justify-between ">
                        <div className=" items-center flex gap-2">
                            <IoRadioButtonOn />
                            <h1>favourite</h1>
                        </div>
                        <p>23</p>
                    </nav>
                    <nav className=" capitalize flex justify-between ">
                        <div className=" items-center flex gap-2">
                            <IoRadioButtonOn />
                            <h1>favourite</h1>
                        </div>
                        <p>23</p>
                    </nav>
                </div>
            </div>

            {/* workspace */}
            <div className=" w-full">
                <nav className=" capitalize flex justify-between ">
                    <div className=" items-center flex gap-2">
                        <IoRocket />
                        <h1>work space</h1>
                    </div>
                    <FaChevronUp />
                </nav>
            </div>
            <div>
                {/* upgrade */}
                <div className=" bg-slate-500 p-3 w-full rounded-3xl">
                    <div className=" text-xl bg-black p-2 rounded-xl w-min">
                        <FcRating />
                    </div>
                    <div className=" py-2">
                        <h2 className=" work-sans-bold"> Upgrade to PRO</h2>
                        <p className=" text-xs">Choose the best plan for you</p>
                    </div>
                    <button className=" w-full text-center rounded-lg py-2 bg-blue-600">
                        Go To Plans
                    </button>
                </div>

                {/* log out */}
                <div className="flex items-center p-3 gap-2">
                    <FiUserMinus className=" text-lg" />
                    <h1>Log out</h1>
                </div>
            </div>
        </div>
    );
};

export default sidebar;
