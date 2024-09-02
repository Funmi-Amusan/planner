import React from "react";
import avatar1 from "../../assets/avatars/avatar1.png";
import avatar2 from "../../assets/avatars/avatar2.png";
import avatar3 from "../../assets/avatars/avatar3.png";
import avatar4 from "../../assets/avatars/avatar4.png";
import avatar5 from "../../assets/avatars/avatar5.png";
import avatar6 from "../../assets/avatars/avatar6.png";
import avatar7 from "../../assets/avatars/avatar7.png";

const MultipleAvatars = () => {
    const profiles = [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar5,
        avatar6,
        avatar7
    ];

    return (
        <button className="flex items-center font-semibold ">
            <div className="flex -space-x-2 ">
                {profiles.splice(0, 3).map((profile, index) => (
                    <img
                        key={index}
                        className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                        src={profile}
                        alt={`Profile ${index + 1}`}
                    />
                ))}
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 ring-2 ring-white">
                    <span className="text-xs font-medium text-gray-600">
                        {`+${profiles.length}`}
                    </span>
                </div>
            </div>
        </button>
    );
};

export default MultipleAvatars;
