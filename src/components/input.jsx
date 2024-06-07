import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineAddTask } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

export default function Input({ component, handleAdd }) {
    const [input, setInput] = useState("");

    return (
        <div className="w-full">
            <p className="sm:text-lg font-semibold mb-2">Add {component}</p>
            <div className="flex border-2 border-gray-500 shadow-lg mb-2 text-black">
                <div className="bg-gray-500 dark:bg-gray-900 p-1">
                    {
                        component === "tasks" ? (
                            <MdOutlineAddTask className="h-full w-8 text-white" />
                        ) : (
                            <IoPersonOutline className="h-full w-8 text-white" />
                        )
                    }
                </div>
                <input
                    type="text"
                    className="focus:outline-none p-2 flex-1 dark:bg-slate-300"
                    value={input}
                    placeholder={component === "tasks" ? "Task 1" : "Musa Habu"}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAdd(input);
                            setInput("");
                        }
                    }}
                />
                <button
                    className="bg-green-700 text-white hover:bg-green-600 py-2 px-4 border-gray-900"
                    onClick={() => {
                        handleAdd(input);
                        setInput("");
                    }}
                >
                    <FaPlus />
                </button>
            </div>
        </div>
    );
}
