import { IoIosAddCircle, IoIosNotifications } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import avatar from "../assets/2150980030.jpg";

const Header = () => {
    return (
        <div className=" flex justify-between items-center text-white">
            <h1 className=" text-white work-sans-semi-bold text-xl py-5 mx-10 active:border-b-2 border-blue">
                Home
            </h1>
            <div>
                <div className="flex items-center gap-7 mx-10 justify-evenly">
                    <div className=" border-white border-2 items-center flex rounded-full p-1">
                        <IoSearchSharp />

                        <input
                            className=" bg-transparent w-48 pl-2 text-white outline-none placeholder:text-white"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div className=" flex align-middle items-center gap-8">
                        <IoIosAddCircle />
                        <IoIosNotifications />
                        <img
                            src={avatar}
                            className=" w-8 rounded-full aspect-square"
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
