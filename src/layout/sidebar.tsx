import {
    IoCalendarOutline,
    IoHomeSharp,
    IoCaretForwardSharp,
    IoCalendar,
    IoMail,
    IoTimer,
    IoStar,
    IoRadioButtonOn,
    IoCaretDown,
    IoCaretUp,
    IoRocket
} from "react-icons/io5";

const sidebar = () => {
    return (
        <div className=" flex flex-col items-center h-screen text-white bg-slate-500 w-64 p-6">
            {/* header */}
            <div className=" flex items-center justify-start text-start">
                <IoCalendarOutline />
                <h1>Planner</h1>
            </div>
            {/* nav */}
            <div className=" w-full">
                <nav className=" capitalize flex justify-between ">
                    <div className=" items-center flex gap-2">
                        <IoHomeSharp />
                        <h1>Home</h1>
                    </div>
                    <IoCaretForwardSharp />
                </nav>
                <nav className=" capitalize flex justify-between ">
                    <div className=" items-center flex gap-2">
                        <IoCalendar />
                        <h1>calendar</h1>
                    </div>
                    <IoCaretForwardSharp />
                </nav>
                <nav className=" capitalize flex justify-between ">
                    <div className=" items-center flex gap-2">
                        <IoMail />
                        <h1>inbox</h1>
                    </div>
                    <IoCaretForwardSharp />
                </nav>
                <nav className=" capitalize flex justify-between ">
                    <div className=" items-center flex gap-2">
                        <IoTimer />
                        <h1>productivity</h1>
                    </div>
                    <IoCaretForwardSharp />
                </nav>
            </div>

            {/* favourite */}
            <div className=" w-full">
                <nav className=" capitalize flex justify-between ">
                    <div className=" items-center flex gap-2">
                        <IoStar />
                        <h1>favourite</h1>
                    </div>
                    <IoCaretDown />
                </nav>
                <div className=" ml-5">
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
                    <IoCaretUp />
                </nav>
            </div>
            {/* upgrade */}
            <div></div>

            {/* log out */}
            <div></div>
        </div>
    );
};

export default sidebar;
