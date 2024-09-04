import { LuChevronRight } from "react-icons/lu";
const Header = () => {
    const items = [
        {
            href: "/schedule",
            label: "Home"
        }
    ];

    return (
        <div className=" flex justify-between items-center text-gray-800 dark:text-white bg-white dark:bg-black  mx-24">
            <div>
                <nav className="flex text-sm " aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-0.5 md:space-x-1">
                        <li className="inline-flex items-center">Dashboard</li>
                        {items.map((item, index) => (
                            <li key={index}>
                                <div className="flex items-center">
                                    <LuChevronRight className="w-6 h-6 text-gray-400" />
                                    <a
                                        href={item.href}
                                        className="ml-1 text-sm font-medium text-gray-600 hover:text-black md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>
                <h2 className="text-lg font-bold py-2">My Workflows</h2>
            </div>
            <div className=" bg-cyan-400 rounded-md px-3 py-2 text-white font-semibold">
                <a href="/geek-dashboard/workflow/create">New Workflow</a>
            </div>
        </div>
    );
};

export default Header;
