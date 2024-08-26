import { IoCalendarOutline } from "react-icons/io5";

const sidebar = () => {
    return (
        <div className=" flex flex-col items-center h-screen text-white bg-slate-500 w-64">
            {/* header */}
            <div className=" flex items-center">
                <IoCalendarOutline />
                <h1>Planner</h1>
            </div>
            {/* nav */}
            <div></div>

            {/* favourite */}
            <div></div>

            {/* workspace */}
            <div></div>
            {/* upgrade */}
            <div></div>

            {/* log out */}
            <div></div>
        </div>
    );
};

export default sidebar;
