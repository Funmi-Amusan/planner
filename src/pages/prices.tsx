import { useState } from "react";

type TabItem = {
    id: Number;
    name: String;
    weeks: number[];
};
const Tabs = () => {
    const tabs: TabItem[] = [
        {
            id: 1,
            name: "Weekly",
            weeks: [0]
        },
        {
            id: 2,
            name: "Every 2 weeks",
            weeks: [0, 1]
        },
        {
            id: 4,
            name: "Monthly",
            weeks: [0, 1, 2, 3]
        }
    ];

    const days = [
        {
            name: "Sunday",
            id: "Su"
        },
        {
            name: "Monday",
            id: "Mo"
        },
        {
            name: "Tuesday",
            id: "Tu"
        },
        {
            name: "Wednesday",
            id: "We"
        },
        {
            name: "Thursday",
            id: "Th"
        },
        {
            name: "Friday",
            id: "Fr"
        },
        {
            name: "Saturday",
            id: "Sa"
        }
    ];

    const weekdays = [
        [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]
    ];
    const [activeTab, setActiveTab] = useState<number>();
    const [weeksArray, setWeeksArray] = useState<number[]>([]);
    const [selectedDays, setSelectedDays] = useState<string[][]>(weekdays);

    const handleDayPicker = (weekIndex: number, day: string) => {
        const newSelectedDays = [...weekdays];
        if (!newSelectedDays[weekIndex]) {
            newSelectedDays[weekIndex] = [];
        }
        if (newSelectedDays[weekIndex].includes(day)) {
            newSelectedDays[weekIndex] = newSelectedDays[weekIndex].filter(
                (d) => d !== day
            );
        } else {
            newSelectedDays[weekIndex].push(day);
        }
        setSelectedDays(newSelectedDays);
    };

    const handleTabClick = (tab: TabItem) => {
        setActiveTab(Number(tab.id));
        setWeeksArray(tab.weeks);
        const newSelectedDays = Array(Number(tab.id))
            .fill(null)
            .map(() => [...weekdays[0]]);
        setSelectedDays(newSelectedDays);
        console.log(newSelectedDays);
    };

    return (
        <div className=" my-5 space-y-2 ">
            <div className=" flex gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.name + "8"}
                        onClick={() => {
                            handleTabClick(tab);
                        }}
                        className={`text-xs px-8 py-2 rounded-3xl  ${
                            activeTab === Number(tab.id)
                                ? " bg-orange-600 border-none text-white"
                                : "text-green-400  border border-orange-800"
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <h3 className=" text-darkestGray text-sm">Days</h3>
            {weeksArray.map((weekIndex) => (
                <div key={weekIndex} className=" flex justify-between">
                    {days.map((day) => (
                        <button
                            key={day.id}
                            onClick={() => handleDayPicker(weekIndex, day.name)}
                            className={`text-sm h-10 aspect-square text-white bg-indigo-600 rounded-full hover:bg-emerald-800 hover:text-white ${
                                selectedDays[weekIndex]?.includes(day.name) &&
                                "bg-pink-600 text-white"
                            } `}
                        >
                            {day.id}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
