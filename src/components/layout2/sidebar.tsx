import { IoCalendarOutline, IoCalendar, IoMail } from "react-icons/io5";
import { LuLineChart } from "react-icons/lu";
import { FiUserMinus } from "react-icons/fi";
import { FcWebcam } from "react-icons/fc";
import { HiCode, HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiSettings4Fill, RiAccountCircleFill } from "react-icons/ri";

const sidebar = () => {
    return (
        <div className=" flex flex-col justify-between items-center work-sans h-screen text-white w-[6%] p-6 gap-y-12 bg-white shadow-[0_0_60px_5px_rgba(0,0,0,0.3)] ">
            <div className="flex flex-col items-center gap-6">
                <div className=" ">
                    <FcWebcam className=" text-5xl" />
                </div>
                <div className=" flex flex-col gap-y-6 items-center text-white ">
                    <nav>
                        <HiOutlineMenuAlt2 className=" text-2xl text-gray-500" />
                    </nav>
                    <nav>
                        <LuLineChart className=" text-2xl text-gray-500" />
                    </nav>
                    <nav>
                        <HiCode className=" text-2xl text-gray-500" />
                    </nav>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center p-3 gap-2">
                    <RiSettings4Fill className=" text-2xl text-gray-500" />
                    <RiAccountCircleFill className=" text-4xl text-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default sidebar;
